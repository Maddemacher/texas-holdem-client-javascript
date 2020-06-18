import _ from 'lodash';

export const getMyActionPosition = (gameState) => {
    const me = gameState.getMyPlayer();

    return getPlayerActionPosition(me.name, gameState);
};

export const getPlayerActionPosition = (name, gameState) => {
    const bigBlind = gameState.getBigBlindPlayer();
    const players = gameState.getTablePlayers();

    const bigBlindPosition = _.findIndex(players, (p) => p.name === bigBlind.name);
    const playerPosition = _.findIndex(players, (p) => p.name === name);

    const diff = playerPosition - bigBlindPosition;

    return ((players.length - diff) % players.length) + 1;
};

export const getPlayerOnPosition = (position, gameState) => {
    const myActionPosition = getMyActionPosition(gameState);

    const me = gameState.getMyPlayer();
    const players = gameState.getTablePlayers();

    const myPosition = _.findIndex(players, (p) => p.name === me.name);

    const positionDiff = myActionPosition - position;

    return players[(myPosition - positionDiff) % players.length];
};

export const getCardKey = (card) => {
    return `${card.suit}:${card.rank}`;
};

export const getHandKey = (cards = []) => {
    const [first, ...rest] = _.orderBy(cards, [(c) => c.suit, (c) => c.rank]);

    return rest.reduce((acc, card) => acc + '::' + getCardKey(card), getCardKey(first));
};

export const ensureArray = (data) => (Array.isArray(data) ? data : [data]);
