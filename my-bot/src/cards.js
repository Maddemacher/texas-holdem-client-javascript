import { isSameSuit } from '@cygni/poker-client-api';
import { toSolverRank } from '@cygni/poker-client-api/src/pokersolver-converter.js';

export const rankings = [
    {
        cards: 'AA',
        ev: '2.32',
        count: '521',
    },
    {
        cards: 'KK',
        ev: '1.67',
        count: '522',
    },
    {
        cards: 'QQ',
        ev: '1.22',
        count: '520',
    },
    {
        cards: 'JJ',
        ev: '0.86',
        count: '521',
    },
    {
        cards: 'AK s',
        ev: '0.78',
        count: '348',
    },
    {
        cards: 'AQ s',
        ev: '0.59',
        count: '348',
    },
    {
        cards: 'TT',
        ev: '0.58',
        count: '520',
    },
    {
        cards: 'AK',
        ev: '0.51',
        count: '1',
    },
    {
        cards: 'AJ s',
        ev: '0.44',
        count: '348',
    },
    {
        cards: 'KQ s',
        ev: '0.39',
        count: '346',
    },
    {
        cards: '99',
        ev: '0.38',
        count: '522',
    },
    {
        cards: 'AT s',
        ev: '0.32',
        count: '348',
    },
    {
        cards: 'AQ',
        ev: '0.31',
        count: '1',
    },
    {
        cards: 'KJ s',
        ev: '0.29',
        count: '346',
    },
    {
        cards: '88',
        ev: '0.25',
        count: '521',
    },
    {
        cards: 'QJ s',
        ev: '0.23',
        count: '348',
    },
    {
        cards: 'KT s',
        ev: '0.20',
        count: '348',
    },
    {
        cards: 'A9 s',
        ev: '0.19',
        count: '348',
    },
    {
        cards: 'AJ',
        ev: '0.19',
        count: '1',
    },
    {
        cards: 'QT s',
        ev: '0.17',
        count: '346',
    },
    {
        cards: 'KQ',
        ev: '0.16',
        count: '1',
    },
    {
        cards: '77',
        ev: '0.16',
        count: '524',
    },
    {
        cards: 'JT s',
        ev: '0.15',
        count: '348',
    },
    {
        cards: 'A8 s',
        ev: '0.10',
        count: '349',
    },
    {
        cards: 'K9 s',
        ev: '0.09',
        count: '348',
    },
    {
        cards: 'AT',
        ev: '0.08',
        count: '1',
    },
    {
        cards: 'A5 s',
        ev: '0.08',
        count: '348',
    },
    {
        cards: 'A7s',
        ev: '0.08',
        count: '349',
    },
    {
        cards: 'KJ',
        ev: '0.08',
        count: '1',
    },
    {
        cards: '66',
        ev: '0.07',
        count: '520',
    },
    {
        cards: 'T9 s',
        ev: '0.05',
        count: '348',
    },
    {
        cards: 'A4 s',
        ev: '0.05',
        count: '347',
    },
    {
        cards: 'Q9 s',
        ev: '0.05',
        count: '348',
    },
    {
        cards: 'J9 s',
        ev: '0.04',
        count: '349',
    },
    {
        cards: 'QJ',
        ev: '0.03',
        count: '1',
    },
    {
        cards: 'A6 s',
        ev: '0.03',
        count: '347',
    },
    {
        cards: '55',
        ev: '0.02',
        count: '521',
    },
    {
        cards: 'A3 s',
        ev: '0.02',
        count: '347',
    },
    {
        cards: 'K8 s',
        ev: '0.01',
        count: '350',
    },
    {
        cards: 'KT',
        ev: '0.01',
        count: '1',
    },
    {
        cards: '98 s',
        ev: '0.00',
        count: '348',
    },
    {
        cards: 'T8 s',
        ev: '-0.00',
        count: '347',
    },
    {
        cards: 'K7 s',
        ev: '-0.00',
        count: '348',
    },
    {
        cards: 'A2 s',
        ev: '0.00',
        count: '347',
    },
    {
        cards: '87 s',
        ev: '-0.02',
        count: '348',
    },
    {
        cards: 'QT',
        ev: '-0.02',
        count: '1',
    },
    {
        cards: 'Q8 s',
        ev: '-0.02',
        count: '348',
    },
    {
        cards: '44',
        ev: '-0.03',
        count: '523',
    },
    {
        cards: 'A9',
        ev: '-0.03',
        count: '1',
    },
    {
        cards: 'J8 s',
        ev: '-0.03',
        count: '348',
    },
    {
        cards: '76 s',
        ev: '-0.03',
        count: '347',
    },
    {
        cards: 'JT',
        ev: '-0.03',
        count: '1',
    },
    {
        cards: '97 s',
        ev: '-0.04',
        count: '350',
    },
    {
        cards: 'K6 s',
        ev: '-0.04',
        count: '347',
    },
    {
        cards: 'K5 s',
        ev: '-0.05',
        count: '349',
    },
    {
        cards: 'K4 s',
        ev: '-0.05',
        count: '348',
    },
    {
        cards: 'T7 s',
        ev: '-0.05',
        count: '347',
    },
    {
        cards: 'Q7 s',
        ev: '-0.06',
        count: '348',
    },
    {
        cards: 'K9',
        ev: '-0.07',
        count: '1',
    },
    {
        cards: '65 s',
        ev: '-0.07',
        count: '348',
    },
    {
        cards: 'T9',
        ev: '-0.07',
        count: '1',
    },
    {
        cards: '86 s',
        ev: '-0.07',
        count: '348',
    },
    {
        cards: 'A8',
        ev: '-0.07',
        count: '1',
    },
    {
        cards: 'J7 s',
        ev: '-0.07',
        count: '345',
    },
    {
        cards: '33',
        ev: '-0.07',
        count: '522',
    },
    {
        cards: '54 s',
        ev: '-0.08',
        count: '348',
    },
    {
        cards: 'Q6 s',
        ev: '-0.08',
        count: '349',
    },
    {
        cards: 'K3 s',
        ev: '-0.08',
        count: '348',
    },
    {
        cards: 'Q9',
        ev: '-0.08',
        count: '1',
    },
    {
        cards: '75 s',
        ev: '-0.09',
        count: '349',
    },
    {
        cards: '22',
        ev: '-0.09',
        count: '524',
    },
    {
        cards: 'J9',
        ev: '-0.09',
        count: '1',
    },
    {
        cards: '64 s',
        ev: '-0.09',
        count: '349',
    },
    {
        cards: 'Q5 s',
        ev: '-0.09',
        count: '350',
    },
    {
        cards: 'K2 s',
        ev: '-0.09',
        count: '349',
    },
    {
        cards: '96 s',
        ev: '-0.09',
        count: '349',
    },
    {
        cards: 'Q3 s',
        ev: '-0.10',
        count: '348',
    },
    {
        cards: 'J8',
        ev: '-0.10',
        count: '1',
    },
    {
        cards: '98',
        ev: '-0.10',
        count: '1',
    },
    {
        cards: 'T8',
        ev: '-0.10',
        count: '1',
    },
    {
        cards: '97',
        ev: '-0.10',
        count: '1',
    },
    {
        cards: 'A7',
        ev: '-0.10',
        count: '1',
    },
    {
        cards: 'T7',
        ev: '-0.10',
        count: '1',
    },
    {
        cards: 'Q4 s',
        ev: '-0.10',
        count: '348',
    },
    {
        cards: 'Q8',
        ev: '-0.11',
        count: '1',
    },
    {
        cards: 'J5 s',
        ev: '-0.11',
        count: '348',
    },
    {
        cards: 'T6',
        ev: '-0.11',
        count: '1',
    },
    {
        cards: '75',
        ev: '-0.11',
        count: '1',
    },
    {
        cards: 'J4 s',
        ev: '-0.11',
        count: '347',
    },
    {
        cards: '74 s',
        ev: '-0.11',
        count: '350',
    },
    {
        cards: 'K8',
        ev: '-0.11',
        count: '1',
    },
    {
        cards: '86',
        ev: '-0.11',
        count: '1',
    },
    {
        cards: '53 s',
        ev: '-0.11',
        count: '346',
    },
    {
        cards: 'K7',
        ev: '-0.11',
        count: '1',
    },
    {
        cards: '63 s',
        ev: '-0.11',
        count: '346',
    },
    {
        cards: 'J6 s',
        ev: '-0.11',
        count: '347',
    },
    {
        cards: '85',
        ev: '-0.11',
        count: '1',
    },
    {
        cards: 'T6 s',
        ev: '-0.11',
        count: '348',
    },
    {
        cards: '76',
        ev: '-0.11',
        count: '1',
    },
    {
        cards: 'A6',
        ev: '-0.12',
        count: '1',
    },
    {
        cards: 'T2',
        ev: '-0.12',
        count: '1',
    },
    {
        cards: '95 s',
        ev: '-0.12',
        count: '348',
    },
    {
        cards: '84',
        ev: '-0.12',
        count: '1',
    },
    {
        cards: '62',
        ev: '-0.12',
        count: '1',
    },
    {
        cards: 'T5 s',
        ev: '-0.12',
        count: '348',
    },
    {
        cards: '95',
        ev: '-0.12',
        count: '1',
    },
    {
        cards: 'A5',
        ev: '-0.12',
        count: '1',
    },
    {
        cards: 'Q7',
        ev: '-0.12',
        count: '1',
    },
    {
        cards: 'T5',
        ev: '-0.12',
        count: '1',
    },
    {
        cards: '87',
        ev: '-0.12',
        count: '1',
    },
    {
        cards: '83',
        ev: '-0.12',
        count: '1',
    },
    {
        cards: '65',
        ev: '-0.12',
        count: '1',
    },
    {
        cards: 'Q2 s',
        ev: '-0.12',
        count: '348',
    },
    {
        cards: '94',
        ev: '-0.12',
        count: '1',
    },
    {
        cards: '74',
        ev: '-0.12',
        count: '1',
    },
    {
        cards: '54',
        ev: '-0.12',
        count: '1',
    },
    {
        cards: 'A4',
        ev: '-0.12',
        count: '1',
    },
    {
        cards: 'T4',
        ev: '-0.12',
        count: '1',
    },
    {
        cards: '82',
        ev: '-0.12',
        count: '1',
    },
    {
        cards: '64',
        ev: '-0.12',
        count: '1',
    },
    {
        cards: '42',
        ev: '-0.12',
        count: '1',
    },
    {
        cards: 'J7',
        ev: '-0.12',
        count: '1',
    },
    {
        cards: '93',
        ev: '-0.12',
        count: '1',
    },
    {
        cards: '85 s',
        ev: '-0.12',
        count: '347',
    },
    {
        cards: '73',
        ev: '-0.12',
        count: '1',
    },
    {
        cards: '53',
        ev: '-0.12',
        count: '1',
    },
    {
        cards: 'T3',
        ev: '-0.12',
        count: '1',
    },
    {
        cards: '63',
        ev: '-0.12',
        count: '1',
    },
    {
        cards: 'K6',
        ev: '-0.12',
        count: '1',
    },
    {
        cards: 'J6',
        ev: '-0.12',
        count: '1',
    },
    {
        cards: '96',
        ev: '-0.12',
        count: '1',
    },
    {
        cards: '92',
        ev: '-0.12',
        count: '1',
    },
    {
        cards: '72',
        ev: '-0.12',
        count: '1',
    },
    {
        cards: '52',
        ev: '-0.12',
        count: '1',
    },
    {
        cards: 'Q4',
        ev: '-0.13',
        count: '1',
    },
    {
        cards: 'K5',
        ev: '-0.13',
        count: '1',
    },
    {
        cards: 'J5',
        ev: '-0.13',
        count: '1',
    },
    {
        cards: '43 s',
        ev: '-0.13',
        count: '348',
    },
    {
        cards: 'Q3',
        ev: '-0.13',
        count: '1',
    },
    {
        cards: '43',
        ev: '-0.13',
        count: '1',
    },
    {
        cards: 'K4',
        ev: '-0.13',
        count: '1',
    },
    {
        cards: 'J4',
        ev: '-0.13',
        count: '1',
    },
    {
        cards: 'T4 s',
        ev: '-0.13',
        count: '350',
    },
    {
        cards: 'Q6',
        ev: '-0.13',
        count: '1',
    },
    {
        cards: 'Q2',
        ev: '-0.13',
        count: '1',
    },
    {
        cards: 'J3 s',
        ev: '-0.13',
        count: '349',
    },
    {
        cards: 'J3',
        ev: '-0.13',
        count: '1',
    },
    {
        cards: 'T3 s',
        ev: '-0.13',
        count: '349',
    },
    {
        cards: 'A3',
        ev: '-0.13',
        count: '1',
    },
    {
        cards: 'Q5',
        ev: '-0.13',
        count: '1',
    },
    {
        cards: 'J2',
        ev: '-0.13',
        count: '1',
    },
    {
        cards: '84 s',
        ev: '-0.13',
        count: '349',
    },
    {
        cards: '82 s',
        ev: '-0.14',
        count: '348',
    },
    {
        cards: '42 s',
        ev: '-0.14',
        count: '350',
    },
    {
        cards: '93 s',
        ev: '-0.14',
        count: '348',
    },
    {
        cards: '73 s',
        ev: '-0.14',
        count: '349',
    },
    {
        cards: 'K3',
        ev: '-0.14',
        count: '1',
    },
    {
        cards: 'J2 s',
        ev: '-0.14',
        count: '348',
    },
    {
        cards: '92 s',
        ev: '-0.14',
        count: '347',
    },
    {
        cards: '52 s',
        ev: '-0.14',
        count: '348',
    },
    {
        cards: 'K2',
        ev: '-0.14',
        count: '1',
    },
    {
        cards: 'T2 s',
        ev: '-0.14',
        count: '349',
    },
    {
        cards: '62 s',
        ev: '-0.14',
        count: '348',
    },
    {
        cards: '32',
        ev: '-0.14',
        count: '1',
    },
    {
        cards: 'A2',
        ev: '-0.15',
        count: '1',
    },
    {
        cards: '83 s',
        ev: '-0.15',
        count: '349',
    },
    {
        cards: '94 s',
        ev: '-0.15',
        count: '348',
    },
    {
        cards: '72 s',
        ev: '-0.15',
        count: '348',
    },
    {
        cards: '32 s',
        ev: '-0.15',
        count: '349',
    },
];

export const getPreflopHandRank = (hand = []) => {
    if (hand.length > 2) {
        throw new Error('only preflop');
    }

    const [card1, card2] = hand;

    const suited = isSameSuit(card1, card2);
    const ranks = [toSolverRank(card1), toSolverRank(card2)];

    ranks.sort();

    const key = ranks.join('') + (suited ? ' s' : '');
    const reverseKey = ranks.reverse().join('') + (suited ? ' s' : '');

    const rank = rankings.find((r) => r.cards === key || r.cards === reverseKey);
    const index = rankings.indexOf(rank);

    return (index + 1) / rankings.length;
};
