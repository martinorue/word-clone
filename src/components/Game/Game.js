import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessForm from './GuessForm';
import Guesses from './Guesses';
import Banner from './Banner';
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
                value: ''
            });
        }
        return guesses;
    };

    const [guesses, setGuesses] = React.useState(initialGuesses());
    const [gameStatus, setGameStatus] = React.useState('');
    return (
        <>
            <Guesses
                guesses={guesses}
                answer={answer}
                setGameStatus={setGameStatus}
            />
            {gameStatus !== '' && <Banner gameStatus={gameStatus} />}
            <GuessForm
                guesses={guesses}
                answer={answer}
                setGuesses={setGuesses}
                gameStatus={gameStatus}
                setGameStatus={setGameStatus}
            />
        </>
    );
}

export default Game;
