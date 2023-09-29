import React from 'react';
import { NUM_OF_GUESSES_ALLOWED, status } from '../../constants';

export default function GuessForm({
    guesses,
    setGuesses,
    gameStatus,
    setGameStatus,
    guess,
    setGuess,
    numOfGuesses,
    setNumOfGuesses,
    answer
}) {
    const handleChangeGuess = (event) => {
        const inputText = event.target.value;
        const lettersOnly = inputText.replace(/[^A-Za-z]/g, '').slice(0, 5); // Filtra y acepta solo letras y hasta 5 caracteres

        const newGuess = {
            id: crypto.randomUUID(),
            value: lettersOnly.toUpperCase()
        };
        setGuess(newGuess);
    };

    const handleSubmitGuess = (event) => {
        event.preventDefault();
        if (!guess.value) return;
        if (guess.value.length !== 5) return;
        if (numOfGuesses === NUM_OF_GUESSES_ALLOWED) return;

        if (guess.value === answer) {
            setGameStatus(status.WON);
        }
        if (numOfGuesses === NUM_OF_GUESSES_ALLOWED - 1) {
            setGameStatus(status.LOST);
        }

        setNumOfGuesses(numOfGuesses + 1);
        setGuess({});
        const nextGuesses = [...guesses];
        nextGuesses[numOfGuesses] = guess;
        setGuesses(nextGuesses);
    };

    return (
        <form
            className="guess-input-wrapper"
            onSubmit={handleSubmitGuess}
            noValidate
        >
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                disabled={gameStatus !== ''}
                type="text"
                className="guess-input"
                value={guess.value || ''}
                onChange={handleChangeGuess}
                pattern="[A-Za-z]{5}"
            />
        </form>
    );
}
