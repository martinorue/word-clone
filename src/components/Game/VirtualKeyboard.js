import React from 'react';

function VirtualKeyboard({ letterStatus }) {
    const keyboardRows = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
    ];

    const createKeyboard = () => {
        const keyboard = keyboardRows.map((row, index) => (
            <div key={index} className="row">
                {row.map((letter) => {
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
