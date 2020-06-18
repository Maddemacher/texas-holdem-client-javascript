import { getPlayerActionPosition, getHandKey } from './utils.js';

describe('utils', () => {
    describe('getPlayerActionPosition', () => {
        it('Should return 0 when big blind', () => {
            const gameState = {
                getBigBlindPlayer: () => ({
                    name: 'big-blind',
                }),
                getTablePlayers: () => [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                    {
                        name: 'big-blind',
                    },
                    {
                        name: '',
                    },
                ],
            };

            const result = getPlayerActionPosition('big-blind', gameState);

            expect(result).toBe(1);
        });

        it('Should return 0 when big blind', () => {
            const gameState = {
                getBigBlindPlayer: () => ({
                    name: 'big-blind',
                }),
                getTablePlayers: () => [
                    {
                        name: '',
                    },
                    {
                        name: 'wanted-position-name',
                    },
                    {
                        name: 'big-blind',
                    },
                    {
                        name: '',
                    },
                ],
            };

            const result = getPlayerActionPosition('wanted-position-name', gameState);

            expect(result).toBe(2);
        });
        it('Should return 0 when big blind', () => {
            const gameState = {
                getBigBlindPlayer: () => ({
                    name: 'big-blind',
                }),
                getTablePlayers: () => [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                    {
                        name: 'big-blind',
                    },
                    {
                        name: 'wanted-position-name',
                    },
                ],
            };

            const result = getPlayerActionPosition('wanted-position-name', gameState);

            expect(result).toBe(4);
        });
    });

    describe('#getHandKey', () => {
        it('Should return hand key', () => {
            const cards = [
                {
                    suit: 'HEARTS',
                    rank: 'TEN',
                },
                {
                    suit: 'SPADES',
                    rank: 'FIVE',
                },
                {
                    suit: 'SPADES',
                    rank: 'SIX',
                },
            ];

            const result = getHandKey(cards);
            const other = getHandKey(cards.reverse());

            expect(result).toEqual(other);
        });
    });
});
