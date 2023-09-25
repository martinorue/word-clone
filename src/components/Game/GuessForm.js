import React from 'react';

export default function GuessForm() {
    const [guess, setGuess] = React.useState('');

    const handleChangeGuess = (event) => {
        const inputText = event.target.value;
        const lettersOnly = inputText.replace(/[^A-Za-z]/g, ''); // Filtra y acepta solo letras

        setGuess(lettersOnly.toUpperCase());
    };

    const handleSubmitGuess = (event) => {
        event.preventDefault();
        if (guess.length === 5) {
            console.log({ guess });
            setGuess('');
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
                value={guess}
                onChange={handleChangeGuess}
                pattern="[A-Za-z]{5}"
            />
        </form>
    );
}
