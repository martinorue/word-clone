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
    const [numOfGuesses, setNumOfGuesses] = React.useState(0);
    return (
        <>
            <Guesses
                guesses={guesses}
                answer={answer}
                setGameStatus={setGameStatus}
            />
            {gameStatus !== '' && (
                <Banner gameStatus={gameStatus} numOfGuesses={numOfGuesses} />
            )}
            <GuessForm
                guesses={guesses}
                answer={answer}
                setGuesses={setGuesses}
                gameStatus={gameStatus}
                setGameStatus={setGameStatus}
                numOfGuesses={numOfGuesses}
                setNumOfGuesses={setNumOfGuesses}
            />
        </>
    );
}

export default Game;
