import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessForm from './GuessForm';
import Guesses from './Guesses';
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const initialGuesses = () => {
        const guesses = [];
        for (let i = 0; i < 6; i++) {
            guesses.push({
                id: crypto.randomUUID(),
                value: ' '
            });
        }
        return guesses;
    };
    const [guesses, setGuesses] = React.useState(initialGuesses());

    return (
        <>
            <Guesses guesses={guesses} />
            <GuessForm guesses={guesses} setGuesses={setGuesses} />
        </>
    );
}

export default Game;
