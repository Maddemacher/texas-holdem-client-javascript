import fs from 'fs';

export const logHandNumber = (handNumber, gameState) => {
    const name = gameState.getMyPlayerName();

    try {
        fs.appendFileSync(`${name}.txt`, `# HAND: ${handNumber}\n`, 'utf8');
    } catch (err) {
        // An error occurred
        console.error(err);
    }
};

export const logAction = (action, gameState) => {
    const name = gameState.getMyPlayerName();

    try {
        fs.appendFileSync(`${name}.txt`, `${JSON.stringify(action)}\n`, 'utf8');
    } catch (err) {
        // An error occurred
        console.error(err);
    }
};
