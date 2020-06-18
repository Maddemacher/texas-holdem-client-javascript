import { tableStates } from '@cygni/poker-client-api';

const flopRange = 0.4;
const turnRange = 0.3;
const riverRange = 0.2;

export const playableRanges = {
    [tableStates.preflop]: {
        '13': {
            '13': 0.03,
            '12': 0.04,
            '11': 0.05,
            '10': 0.08,
            '9': 0.1,
            '8': 0.12,
            '7': 0.15,
            '6': 0.18,
            '5': 0.21,
            '4': 0.29,
            '3': 0.49,
            '2': 0.7,
            '1': 0.8,
        },
        '12': {
            '12': 0.04,
            '11': 0.05,
            '10': 0.08,
            '9': 0.1,
            '8': 0.12,
            '7': 0.15,
            '6': 0.18,
            '5': 0.21,
            '4': 0.29,
            '3': 0.49,
            '2': 0.7,
            '1': 0.8,
        },
        '11': {
            '11': 0.05,
            '10': 0.08,
            '9': 0.1,
            '8': 0.12,
            '7': 0.15,
            '6': 0.18,
            '5': 0.21,
            '4': 0.29,
            '3': 0.49,
            '2': 0.7,
            '1': 0.8,
        },
        '10': {
            '10': 0.08,
            '9': 0.1,
            '8': 0.12,
            '7': 0.15,
            '6': 0.18,
            '5': 0.21,
            '4': 0.29,
            '3': 0.49,
            '2': 0.7,
            '1': 0.8,
        },
        '9': {
            '9': 0.1,
            '8': 0.12,
            '7': 0.15,
            '6': 0.18,
            '5': 0.21,
            '4': 0.29,
            '3': 0.49,
            '2': 0.7,
            '1': 0.8,
        },
        '8': {
            '8': 0.12,
            '7': 0.15,
            '6': 0.18,
            '5': 0.21,
            '4': 0.29,
            '3': 0.49,
            '2': 0.7,
            '1': 0.8,
        },
        '7': {
            '7': 0.15,
            '6': 0.18,
            '5': 0.21,
            '4': 0.29,
            '3': 0.49,
            '2': 0.7,
            '1': 0.8,
        },
        '6': {
            '6': 0.18,
            '5': 0.21,
            '4': 0.29,
            '3': 0.49,
            '2': 0.7,
            '1': 0.8,
        },
        '5': {
            '5': 0.21,
            '4': 0.29,
            '3': 0.49,
            '2': 0.7,
            '1': 0.8,
        },
        '4': {
            '4': 0.29,
            '3': 0.49,
            '2': 0.7,
            '1': 0.8,
        },
        '3': {
            '3': 0.55,
            '2': 0.7,
            '1': 0.8,
        },
        '2': {
            '2': 0.85,
            '1': 0.85,
        },
    },
    [tableStates.flop]: {
        '13': {
            '13': flopRange,
            '12': flopRange,
            '11': flopRange,
            '10': flopRange,
            '9': flopRange,
            '8': flopRange,
            '7': flopRange,
            '6': flopRange,
            '5': flopRange,
            '4': flopRange,
            '3': flopRange,
            '2': flopRange,
            '1': flopRange,
        },
        '12': {
            '12': flopRange,
            '11': flopRange,
            '10': flopRange,
            '9': flopRange,
            '8': flopRange,
            '7': flopRange,
            '6': flopRange,
            '4': flopRange,
            '5': flopRange,
            '3': flopRange,
            '2': flopRange,
            '1': flopRange,
        },
        '11': {
            '11': flopRange,
            '10': flopRange,
            '9': flopRange,
            '8': flopRange,
            '7': flopRange,
            '6': flopRange,
            '5': flopRange,
            '4': flopRange,
            '3': flopRange,
            '2': flopRange,
            '1': flopRange,
        },
        '10': {
            '10': flopRange,
            '9': flopRange,
            '8': flopRange,
            '7': flopRange,
            '6': flopRange,
            '5': flopRange,
            '4': flopRange,
            '3': flopRange,
            '2': flopRange,
            '1': flopRange,
        },
        '9': {
            '9': flopRange,
            '8': flopRange,
            '7': flopRange,
            '6': flopRange,
            '5': flopRange,
            '4': flopRange,
            '3': flopRange,
            '2': flopRange,
            '1': flopRange,
        },
        '8': {
            '8': flopRange,
            '7': flopRange,
            '6': flopRange,
            '5': flopRange,
            '4': flopRange,
            '3': flopRange,
            '2': flopRange,
            '1': flopRange,
        },
        '7': {
            '7': flopRange,
            '6': flopRange,
            '5': flopRange,
            '4': flopRange,
            '3': flopRange,
            '2': flopRange,
            '1': flopRange,
        },
        '6': {
            '6': flopRange,
            '5': flopRange,
            '4': flopRange,
            '3': flopRange,
            '2': flopRange,
            '1': flopRange,
        },
        '5': {
            '5': flopRange,
            '4': flopRange,
            '3': flopRange,
            '2': flopRange,
            '1': flopRange,
        },
        '4': {
            '4': flopRange,
            '3': flopRange,
            '2': flopRange,
            '1': flopRange,
        },
        '3': {
            '3': flopRange,
            '2': flopRange,
            '1': flopRange,
        },
        '2': {
            '2': flopRange,
            '1': flopRange,
        },
    },
    [tableStates.turn]: {
        '13': {
            '13': turnRange,
            '12': turnRange,
            '11': turnRange,
            '10': turnRange,
            '9': turnRange,
            '8': turnRange,
            '7': turnRange,
            '6': turnRange,
            '5': turnRange,
            '4': turnRange,
            '3': turnRange,
            '2': turnRange,
            '1': turnRange,
        },
        '12': {
            '12': turnRange,
            '11': turnRange,
            '10': turnRange,
            '9': turnRange,
            '8': turnRange,
            '7': turnRange,
            '6': turnRange,
            '4': turnRange,
            '5': turnRange,
            '3': turnRange,
            '2': turnRange,
            '1': turnRange,
        },
        '11': {
            '11': turnRange,
            '10': turnRange,
            '9': turnRange,
            '8': turnRange,
            '7': turnRange,
            '6': turnRange,
            '5': turnRange,
            '4': turnRange,
            '3': turnRange,
            '2': turnRange,
            '1': turnRange,
        },
        '10': {
            '10': turnRange,
            '9': turnRange,
            '8': turnRange,
            '7': turnRange,
            '6': turnRange,
            '5': turnRange,
            '4': turnRange,
            '3': turnRange,
            '2': turnRange,
            '1': turnRange,
        },
        '9': {
            '9': turnRange,
            '8': turnRange,
            '7': turnRange,
            '6': turnRange,
            '5': turnRange,
            '4': turnRange,
            '3': turnRange,
            '2': turnRange,
            '1': turnRange,
        },
        '8': {
            '8': turnRange,
            '7': turnRange,
            '6': turnRange,
            '5': turnRange,
            '4': turnRange,
            '3': turnRange,
            '2': turnRange,
            '1': turnRange,
        },
        '7': {
            '7': turnRange,
            '6': turnRange,
            '5': turnRange,
            '4': turnRange,
            '3': turnRange,
            '2': turnRange,
            '1': turnRange,
        },

        '6': {
            '6': turnRange,
            '5': turnRange,
            '4': turnRange,
            '3': turnRange,
            '2': turnRange,
            '1': turnRange,
        },
        '5': {
            '5': turnRange,
            '4': turnRange,
            '3': turnRange,
            '2': turnRange,
            '1': turnRange,
        },
        '4': {
            '4': turnRange,
            '3': turnRange,
            '2': turnRange,
            '1': turnRange,
        },
        '3': {
            '3': turnRange,
            '2': turnRange,
            '1': turnRange,
        },
        '2': {
            '2': turnRange,
            '1': turnRange,
        },
    },
    [tableStates.river]: {
        '13': {
            '13': riverRange,
            '12': riverRange,
            '11': riverRange,
            '10': riverRange,
            '9': riverRange,
            '8': riverRange,
            '7': riverRange,
            '6': riverRange,
            '5': riverRange,
            '4': riverRange,
            '3': riverRange,
            '2': riverRange,
            '1': riverRange,
        },
        '12': {
            '12': riverRange,
            '11': riverRange,
            '10': riverRange,
            '9': riverRange,
            '8': riverRange,
            '7': riverRange,
            '6': riverRange,
            '4': riverRange,
            '5': riverRange,
            '3': riverRange,
            '2': riverRange,
            '1': riverRange,
        },
        '11': {
            '11': riverRange,
            '10': riverRange,
            '9': riverRange,
            '8': riverRange,
            '7': riverRange,
            '6': riverRange,
            '5': riverRange,
            '4': riverRange,
            '3': riverRange,
            '2': riverRange,
            '1': riverRange,
        },
        '10': {
            '10': riverRange,
            '9': riverRange,
            '8': riverRange,
            '7': riverRange,
            '6': riverRange,
            '5': riverRange,
            '4': riverRange,
            '3': riverRange,
            '2': riverRange,
            '1': riverRange,
        },
        '9': {
            '9': riverRange,
            '8': riverRange,
            '7': riverRange,
            '6': riverRange,
            '5': riverRange,
            '4': riverRange,
            '3': riverRange,
            '2': riverRange,
            '1': riverRange,
        },
        '8': {
            '8': riverRange,
            '7': riverRange,
            '6': riverRange,
            '5': riverRange,
            '4': riverRange,
            '3': riverRange,
            '2': riverRange,
            '1': riverRange,
        },
        '7': {
            '7': riverRange,
            '6': riverRange,
            '5': riverRange,
            '4': riverRange,
            '3': riverRange,
            '2': riverRange,
            '1': riverRange,
        },
        '6': {
            '6': riverRange,
            '5': riverRange,
            '4': riverRange,
            '3': riverRange,
            '2': riverRange,
            '1': riverRange,
        },
        '5': {
            '5': riverRange,
            '4': riverRange,
            '3': riverRange,
            '2': riverRange,
            '1': riverRange,
        },
        '4': {
            '4': riverRange,
            '3': riverRange,
            '2': riverRange,
            '1': riverRange,
        },
        '3': {
            '3': riverRange,
            '2': riverRange,
            '1': riverRange,
        },
        '2': {
            '2': riverRange,
            '1': riverRange,
        },
    },
};