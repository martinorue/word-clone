import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessForm from './GuessForm';
import Guesses from './Guesses';
import Banner from './Banner';
import VirtualKeyboard from './VirtualKeyboard';
import { checkGuess } from '../../game-helpers';
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
    const [guess, setGuess] = React.useState({});
    const [gameStatus, setGameStatus] = React.useState('');
    const [numOfGuesses, setNumOfGuesses] = React.useState(0);

    const letterStatus = guesses.map((guess) => {
        const res = checkGuess(guess.value, answer);
        return res;
    });
    return (
        <>
            <Guesses
                guesses={guesses}
                answer={answer}
                setGameStatus={setGameStatus}
            />
            {gameStatus !== '' && (
                <Banner
                    gameStatus={gameStatus}
                    numOfGuesses={numOfGuesses}
                    answer={answer}
                />
            )}
            <GuessForm
                guesses={guesses}
                answer={answer}
                setGuesses={setGuesses}
                gameStatus={gameStatus}
                setGameStatus={setGameStatus}
                guess={guess}
                setGuess={setGuess}
                numOfGuesses={numOfGuesses}
                setNumOfGuesses={setNumOfGuesses}
            />
            <VirtualKeyboard
                guesses={guesses}
                letterStatus={letterStatus}
                answer={answer}
                numOfGuesses={numOfGuesses}
            />
        </>
    );
}

export default Game;
