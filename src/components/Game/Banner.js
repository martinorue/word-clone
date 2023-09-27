import { status } from '../../constants';

export default function Banner({ numOfGuesses, gameStatus }) {
    const bannerType = {
        won: 'happy',
        lost: 'sad'
    };

    let bannerComponent;

    if (gameStatus === status.WON) {
        bannerComponent = (
            <p>
                <strong>Congratulations!</strong> Got it in{' '}
                <strong>
                    {`${numOfGuesses} 
                ${numOfGuesses > 1 ? 'guesses' : 'guess'} `}
                </strong>
            </p>
        );
    }

    if (gameStatus === status.LOST) {
        bannerComponent = (
            <p>
                Sorry, the correct answer is <strong>LEARN</strong>.
            </p>
        );
    }

    return (
        <div className={`${bannerType[gameStatus]} banner`}>
            {bannerComponent}
        </div>
    );
}
