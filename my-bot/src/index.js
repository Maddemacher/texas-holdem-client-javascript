/* eslint-disable complexity */
import _ from 'lodash';
import { createBot, events, getNameFromCommandLine, evaluator, tableStates, actions } from '@cygni/poker-client-api';

import { getMyActionPosition, getPlayerActionPosition } from './utils.js';
import { playableRanges } from './ranges.js';
import { getHandStrength } from './simulator.js';
import { logHandNumber, logAction } from './logger.js';
import { getPreflopHandRank } from './cards.js';

const bot = createBot({ name: getNameFromCommandLine() });

let handIteration = 0;
let betRounds = 0;

const isHeadsup = () => {
    const gameState = bot.getGameState();
    const players = gameState.getTablePlayers();

    return players.filter((p) => p.chipCount > 0).length <= 2;
};

const getLimits = (myPosition, positionOverride) => {
    const gameState = bot.getGameState();
    const tableState = gameState.getTableState();
    const players = gameState.getTablePlayers();

    const playerPosition = positionOverride || myPosition;
    const percentageTable = playableRanges[gameState.getTableState()][players.length];
    const betLimit = percentageTable[playerPosition];

    if (!positionOverride) {
        return {
            raiseLimit: betLimit,
            callLimit: -1,
        };
    }

    let raiseLimit = undefined;
    let callLimit = undefined;

    switch (tableState) {
        case tableStates.preflop:
            raiseLimit = betLimit / 2;
            callLimit = betLimit / 2;
            break;
        case tableStates.flop:
            raiseLimit = betLimit / 4;
            callLimit = (betLimit / 4) * 3;
            break;
        case tableStates.turn:
            raiseLimit = betLimit / 4;
            callLimit = (betLimit / 4) * 3;
            break;
        case tableStates.river:
            raiseLimit = betLimit / 4;
            callLimit = (betLimit / 4) * 3;
            break;
        default:
            break;
    }

    return { raiseLimit, callLimit };
};

export const getActionForLimits = (
    rank,
    { raiseAction, callAction, checkAction, foldAction, allInAction },
    positionOverride
) => {
    const gameState = bot.getGameState();
    const myPosition = getMyActionPosition(gameState);

    const { raiseLimit, callLimit } = getLimits(myPosition, positionOverride);

    console.log({
        positionOverride,
        rank,
        callLimit,
        raiseLimit,
        myPosition,
        tableState: gameState.getTableState(),
        betRounds,
    });

    if (positionOverride) {
        if (rank < raiseLimit) {
            return { action: raiseAction || callAction || checkAction || allInAction, rank };
        }

        if (rank < raiseLimit + callLimit) {
            return { action: callAction || checkAction || allInAction, rank };
        }
    }

    if (rank < raiseLimit) {
        return { action: raiseAction || callAction || checkAction || allInAction, rank };
    }

    if (rank > raiseLimit) {
        const isSmallBlind = gameState.amISmallBlindPlayer();

        if (isSmallBlind && callAction && callAction.amount === gameState.getSmallBlindAmount()) {
            return { action: callAction || checkAction || foldAction, rank };
        }

        return { action: checkAction || foldAction, rank };
    }

    return { action: callAction || checkAction, rank };
};

const getPreflopAction = (
    gameState,
    { raiseAction, callAction, checkAction, foldAction, allInAction },
    positionOverride
) => {
    const myCards = gameState.getMyCards();
    const rank = getPreflopHandRank(myCards);

    return getActionForLimits(
        rank,
        { raiseAction, callAction, checkAction, foldAction, allInAction },
        positionOverride
    );
};

export const getSimulatedAction = (
    gameState,
    { raiseAction, callAction, checkAction, foldAction, allInAction },
    positionOverride
) => {
    const myCards = gameState.getMyCards();
    const communityCards = gameState.getCommunityCards();

    const handStrength = getHandStrength(myCards, communityCards);

    return getActionForLimits(
        handStrength,
        { raiseAction, callAction, checkAction, foldAction, allInAction },
        positionOverride
    );
};

const getLastSeatThatSpoke = (gameState) => {
    const players = gameState.getTablePlayers();
    const playersWithPosition = players.map((p) => ({
        ...p,
        position: getPlayerActionPosition(p.name, gameState),
    }));

    const myPosition = getPlayerActionPosition(gameState.getMyPlayerName(), gameState);

    const playersWithHigherPosition = playersWithPosition.filter(
        (p) => p.position > myPosition && p.lastAction === actions.raise
    );

    const max = _.maxBy(playersWithHigherPosition, (p) => p.position);

    if (max) {
        return max.position;
    }

    return undefined;
};

const getAction = ({ raiseAction, checkAction, callAction, foldAction, allInAction }) => {
    const gameState = bot.getGameState();
    const lastSeatThatSpoke = getLastSeatThatSpoke(gameState);
    const tableState = gameState.getTableState();

    if (tableState === tableStates.preflop) {
        return getPreflopAction(
            gameState,
            { raiseAction, callAction, checkAction, foldAction, allInAction },
            lastSeatThatSpoke
        );
    }

    if (tableState === tableStates.flop) {
        const cards = gameState.getMyCardsAndCommunityCards();
        const community = gameState.getCommunityCards();

        const evaluatedHand = evaluator.evaluate(cards);
        if (evaluator.compare(cards, community) === -1 && evaluatedHand.ranking() > 2) {
            return {
                action: raiseAction || callAction || checkAction || allInAction,
                rank: `handrank${evaluatedHand.ranking()}`,
            };
        }
    }

    if (tableState === tableStates.turn) {
        const cards = gameState.getMyCardsAndCommunityCards();
        const community = gameState.getCommunityCards();

        const evaluatedHand = evaluator.evaluate(cards);
        if (evaluator.compare(cards, community) === -1 && evaluatedHand.ranking() > 2) {
            return {
                action: raiseAction || callAction || checkAction || allInAction,
                rank: `handrank${evaluatedHand.ranking()}`,
            };
        }
    }

    if (tableState === tableStates.river) {
        const cards = gameState.getMyCardsAndCommunityCards();
        const community = gameState.getCommunityCards();

        const evaluatedHand = evaluator.evaluate(cards);
        if (evaluator.compare(cards, community) === -1 && evaluatedHand.ranking() > 2) {
            return {
                action: raiseAction || callAction || checkAction || allInAction,
                rank: `handrank${evaluatedHand.ranking()}`,
            };
        }
    }

    return getSimulatedAction(
        gameState,
        {
            raiseAction,
            callAction,
            checkAction,
            foldAction,
            allInAction,
        },
        lastSeatThatSpoke
    );
};

const shouldGoAllIn = (gameState, { actionType }) => {
    if (gameState.getTableState() !== tableStates.preflop) {
        return false;
    }

    const chips = gameState.getMyChips();
    const bigBlind = gameState.getBigBlindAmount();

    if ([actions.fold, actions.check].includes(actionType)) {
        return false;
    }

    return chips < 5 * bigBlind;
};

const getRaiseAmount = (gameState, minimumAmount, maximumAmount) => {
    const potSize = gameState.getPotTotal();

    const potsizeAfterCall = potSize + minimumAmount;

    return Math.min(Math.round(potsizeAfterCall * 0.4), maximumAmount);
};

const getBetAmount = ({ actionType, amount }, gameState, allInAction) => {
    if (actionType === actions.raise) {
        return getRaiseAmount(gameState, amount, allInAction.amount);
    }

    return amount;
};

const handleReraise = (action, { checkAction, callAction }) => {
    if (action && (action.actionType === actions.raise || action.actionType === actions.call)) {
        betRounds = betRounds + 1;

        if (betRounds > 5) {
            return callAction || checkAction;
        }

        return action;
    }

    betRounds = 0;
    return action;
};

const handleRandomAllIn = (action, rank, { checkAction, foldAction }) => {
    const gameState = bot.getGameState();

    if (action.amount <= gameState.getBigBlindAmount()) {
        return action;
    }

    if (rank < 0.2) {
        return action;
    }

    if (action.amount < 10 * gameState.getBigBlindAmount()) {
        return action;
    }

    return checkAction || foldAction;
};

const handleHasNothingAfterFlop = (action, { checkAction, foldAction }) => {
    const gameState = bot.getGameState();
    const myCards = gameState.getMyCards();
    const communityCards = gameState.getCommunityCards();

    if (gameState.getTableState() === tableStates.preflop) {
        return action;
    }

    if (evaluator.compare([...myCards, ...communityCards], communityCards) === -1) {
        return action;
    }

    if ([actions.raise, actions.call, actions.allIn].includes(action.actionType)) {
        return checkAction || foldAction;
    }

    return action;
};

const handleLowRankAfterFlop = (action, rank, { checkAction, foldAction }) => {
    const gameState = bot.getGameState();

    if (gameState.getTableState() === tableStates.preflop) {
        return action;
    }

    if (rank > 0.2) {
        return checkAction || foldAction;
    }

    return action;
};

const handleNoSelectedAction = (action, { allInAction, foldAction }) => {
    if (action !== undefined) {
        return action;
    }

    const gameState = bot.getGameState();
    const chips = gameState.getMyChips();
    const bigBlind = gameState.getBigBlindAmount();

    if (chips < 10 * bigBlind) {
        return allInAction;
    }

    return foldAction;
};

const handleAllInOnPreflop = (action, { foldAction, allInAction }) => {
    const gameState = bot.getGameState();

    if (gameState.getTableState() !== tableStates.preflop) {
        return action;
    }

    if (action.amount === allInAction.amount) {
        return foldAction;
    }

    return action;
};

bot.registerActionHandler((possibleActions) => {
    const gameState = bot.getGameState();

    const { action, rank } = getAction(possibleActions);

    let finalAction = action;

    finalAction = handleNoSelectedAction(finalAction, possibleActions);
    finalAction = handleReraise(finalAction, possibleActions);
    finalAction = handleRandomAllIn(finalAction, rank, possibleActions);
    finalAction = handleLowRankAfterFlop(finalAction, rank, possibleActions);
    finalAction = handleHasNothingAfterFlop(finalAction, possibleActions);

    if (shouldGoAllIn(gameState, finalAction)) {
        finalAction = possibleActions.allInAction;
    }

    finalAction = handleAllInOnPreflop(finalAction, possibleActions);

    finalAction = {
        actionType: finalAction.actionType,
        amount: getBetAmount(finalAction, gameState, possibleActions.allInAction),
    };

    console.log({
        action,
        finalAction,
    });

    logAction({ action, rank, tableState: gameState.getTableState(), seat: getMyActionPosition(gameState) }, gameState);

    return finalAction;
});

bot.on(events.PlayIsStartedEvent, () => {
    logHandNumber(handIteration, bot.getGameState());

    handIteration = handIteration + 1;
    betRounds = 0;
});

bot.on(events.TableIsDoneEvent, (event) => {
    console.log(`Table is done [amIWinner=${bot.getGameState().amIWinner()}]`);
    console.log('Table is done event ', event.players);
    console.log(`survived hands: ${handIteration}`);
});

// Finally, connect the bot to the server
bot.connect();
