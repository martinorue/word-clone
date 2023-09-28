import React from 'react';
import { checkGuess } from '../../game-helpers';

function VirtualKeyboard({ guesses, answer, numOfGuesses }) {
    // const res = checkGuess(value, answer);
    // const letterStatus = res[num].status;
    console.log(numOfGuesses, guesses[numOfGuesses - 1]); //obtengo la última palabra adivinada

    const keyboardRows = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
    ];

    const checkKeys = () => {};

    const createKeyboard = () => {
        const keyboard = keyboardRows.map((row, index) => (
            <div key={index} className="row">
                {row.map((letter, index) => {
                    const res = checkGuess(letter, answer);
                    // console.log(res);
                    const letterStatus = res.status;
                    return (
                        <button className={`key ${letterStatus}`} key={letter}>
                            {letter}
                        </button>
                    );
                })}
            </div>
        ));
        return keyboard;
    };

    return <div className="keyboard">{createKeyboard()}</div>;
}

export default VirtualKeyboard;
