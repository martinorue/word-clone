import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

export default function GuessForm({ guesses, setGuesses }) {
    const [guess, setGuess] = React.useState({});

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
        //ir contando los guesses hasta llegar a NUm_OF_GUESSES_ALLOWED

        // if (guesses?.length === NUM_OF_GUESSES_ALLOWED) return;
        if (guess?.value.length === 5) {
            console.log({ guess });
            setGuess({});
            const nextGuesses = [...guesses];
            console.log(nextGuesses);
            nextGuesses[0] = guess;
            setGuesses(nextGuesses);
        }
    };

    return (
        <form
            className="guess-input-wrapper"
            onSubmit={handleSubmitGuess}
            noValidate
        >
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                type="text"
                className="guess-input"
                value={guess.value || ''}
                onChange={handleChangeGuess}
                pattern="[A-Za-z]{5}"
            />
        </form>
    );
}
