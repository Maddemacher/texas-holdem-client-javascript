import { getPreflopHandRank } from './cards.js';

describe('getPreflopHandRank', () => {
    it('Should return correct rank', () => {
        const hand = [
            {
                rank: 'ACE',
                suit: 'HEARTS',
            },
            {
                rank: 'ACE',
                suit: 'CLUBS',
            },
        ];

        expect(getPreflopHandRank(hand)).toBeCloseTo(1 / 169);
    });

    it('Should return correct rank suited', () => {
        const hand = [
            {
                rank: 'ACE',
                suit: 'HEARTS',
            },
            {
                rank: 'KING',
                suit: 'HEARTS',
            },
        ];

        expect(getPreflopHandRank(hand)).toBeCloseTo(5 / 169);
    });

    it('Should return correct rank on number', () => {
        const hand = [
            {
                rank: 'QUEEN',
                suit: 'HEARTS',
            },
            {
                rank: 'SEVEN',
                suit: 'DIAMONDS',
            },
        ];

        expect(getPreflopHandRank(hand)).toBeCloseTo(108 / 169);
    });
});
