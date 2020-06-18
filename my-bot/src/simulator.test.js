import { createDeck, evaluator } from '@cygni/poker-client-api';
import { getHandStrength, getWinChance, getBestHand } from './simulator.js';

const getRoyal = () => {
    const hand = [
        {
            suit: 'HEARTS',
            rank: 'ACE',
        },
        {
            suit: 'HEARTS',
            rank: 'KING',
        },
    ];
    const community = [
        {
            suit: 'HEARTS',
            rank: 'QUEEN',
        },
        {
            suit: 'HEARTS',
            rank: 'JACK',
        },
        {
            suit: 'HEARTS',
            rank: 'TEN',
        },
    ];

    return { hand, community };
};

const getShit = () => {
    const hand = [
        {
            suit: 'HEARTS',
            rank: 'DEUCE',
        },
        {
            suit: 'SPADES',
            rank: 'SEVEN',
        },
    ];
    const community = [
        {
            suit: 'CLUBS',
            rank: 'QUEEN',
        },
        {
            suit: 'CLUBS',
            rank: 'JACK',
        },
        {
            suit: 'CLUBS',
            rank: 'TEN',
        },
    ];

    return { hand, community };
};

describe('simulator', () => {
    describe('getWinChance', () => {
        it('Should return 1 on royal flush', () => {
            const { hand, community } = getRoyal();

            const winChance = getWinChance(hand, community, 1);

            expect(winChance).toBe(1);
        });

        it('Should be low on shit', () => {
            const { hand, community } = getShit();

            const winChance = getWinChance(hand, community, 1);

            expect(winChance).toBeLessThan(0.2);
        });
    });

    describe('getHandStrength', () => {
        it('Should return low on shit', () => {
            const { hand, community } = getShit();

            const strength = getHandStrength(hand, community);

            expect(strength).toBeGreaterThan(0.8);
        });

        it('Should return 1 on royal flush', () => {
            const { hand, community } = getRoyal();

            const strength = getHandStrength(hand, community);

            expect(strength).toBe(0);
        });

        it('Should return valid when no community', () => {
            const deck = createDeck();
            const hand = deck.draw(2);

            const result = getHandStrength(hand);

            expect(result).toBeDefined();
        });

        it('Should return valid when flop', () => {
            const deck = createDeck();
            const hand = deck.draw(2);
            const community = deck.draw(3);

            const result = getHandStrength(hand, community);

            expect(result).toBeDefined();
        });
    });

    describe('getBestHand', () => {
        it('Should return same on royal', () => {
            const { hand, community } = getRoyal();

            const bestHand = getBestHand([...hand, ...community]);

            expect(bestHand).toMatchObject([...hand, ...community, expect.any(Object), expect.any(Object)]);
        });

        it.skip('Should find full house on two pairs', () => {
            const hand = [
                {
                    suit: 'HEARTS',
                    rank: 'FOUR',
                },
                {
                    suit: 'CLUBS',
                    rank: 'EIGHT',
                },
            ];

            const community = [
                {
                    suit: 'CLUBS',
                    rank: 'FOUR',
                },
                {
                    suit: 'HEARTS',
                    rank: 'EIGHT',
                },
                {
                    suit: 'DIAMONDS',
                    rank: 'KING',
                },
            ];

            const bestHand = getBestHand([...hand, ...community]);

            const evaluated = evaluator.evaluate(bestHand);

            expect(evaluated.ranking()).toBeGreaterThan(6);
        });
    });
});
