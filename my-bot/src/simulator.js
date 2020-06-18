import { createDeck, evaluator } from '@cygni/poker-client-api';
import { getHandKey, ensureArray } from './utils.js';

const SIMULATION_ROUNDS = 500;

const beatsOtherHand = (hand, otherHand, community, potentialCommunity = []) => {
    const fullHand = [...hand, ...community, ...ensureArray(potentialCommunity)];
    const otherFullHand = [...otherHand, ...community, ...ensureArray(potentialCommunity)];

    return evaluator.compare(fullHand, otherFullHand) === -1;
};

const hasHandBeenUsed = (hand, usedHands) => {
    let used = false;

    const handKey = getHandKey(hand);

    if (usedHands[handKey] !== undefined) {
        used = true;
    }

    usedHands[handKey] = true;

    return used;
};

export const getWinChance = (cards = [], communityCards = [], otherPlayerCount, rounds = SIMULATION_ROUNDS) => {
    if (otherPlayerCount <= 0) {
        throw new Error('No players to simulate agains');
    }

    let wins = 0;
    let usedHands = {};

    let handsThatIBeat = {};
    let handsThatILoseAgainst = {};

    for (let i = 0; i < rounds; i += 1) {
        const deck = createDeck([...cards, ...communityCards]);

        // const potentialCommunityCards = deck.draw(5 - communityCards.length);

        const otherHands = Array.from({ length: otherPlayerCount }).map(() => deck.draw(2));

        const handsToCompare = otherHands.filter((h) => hasHandBeenUsed(h, usedHands) === false);

        if (
            handsToCompare.some(
                (otherHand) => beatsOtherHand(cards, otherHand, communityCards) //, potentialCommunityCards)
            )
        ) {
            wins = wins + 1;
        }
    }

    return wins / Object.keys(usedHands).length;
};

// double check
export const getBestHand = (cards = [], rounds = SIMULATION_ROUNDS) => {
    let bestHand = undefined;

    for (let i = 0; i < rounds; i = i + 1) {
        const deck = createDeck(cards);

        const potentialCommunity = deck.draw(7 - cards.length);

        const potentialHand = [...cards, ...potentialCommunity];

        if (bestHand === undefined || evaluator.compare(bestHand, potentialHand) <= 0) {
            bestHand = potentialHand;
            continue;
        }
    }

    return bestHand;
};

export const getHandStrength = (hand = [], communityCards = [], rounds = 5000) => {
    let betterHands = 0;
    const usedHands = {};

    for (let i = 0; i < rounds; i += 1) {
        const deck = createDeck([...hand, ...communityCards]);

        const otherHand = deck.draw(2);

        if (hasHandBeenUsed(otherHand, usedHands)) {
            continue;
        }

        if (beatsOtherHand(otherHand, hand, communityCards)) {
            betterHands = betterHands + 1;
        }
    }

    return 1 - (1 - betterHands / Object.keys(usedHands).length);
};
