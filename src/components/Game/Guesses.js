import React from 'react';
import { range } from '../../utils';
import Guess from './Guess';

export default function Guesses({ guesses }) {
    return (
        <div className="guess-results">
            {guesses.map(({ id, value }) => (
                <p className="guess" key={id}>
                    {range(5).map((num) => (
                        <Guess key={num} value={value} num={num} />
                    ))}
                </p>
            ))}
        </div>
    );
}
