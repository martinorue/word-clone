import { checkGuess } from '../../game-helpers';
export default function Guess({ num, value, answer }) {
    if (!value[num]) {
        return <span className="cell">&nbsp;</span>;
    }
    const res = checkGuess(value, answer);
    const status = res[num].status;
    console.log(status);
    return <span className={`cell ${status}`}>{value[num]}</span>;
}
