import React from 'react';
import { range } from '../../utils';

export default function Guesses({ guesses }) {
    const guessesValues = guesses.map((guess) => guess);
    console.log(guesses);

    return (
        <div className="guess-results">
            {guessesValues.map(({ id, value }) => (
                <p className="guess" key={id}>
                    {range(5).map((num) => (
                        <span key={num} className="cell">
                            {value[num]}
                        </span>
                    ))}
                </p>
            ))}
        </div>
    );
}
