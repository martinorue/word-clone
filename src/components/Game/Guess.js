import { checkGuess } from '../../game-helpers';
export default function Guess({ num, value, answer }) {
    if (!value[num]) {
        return <span className="cell">&nbsp;</span>;
    }

    const res = checkGuess(value, answer);
    const letterStatus = res[num].status;
    return <span className={`cell ${letterStatus}`}>{value[num]}</span>;
}
