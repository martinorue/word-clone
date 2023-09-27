export default function Guess({ num, value }) {
    return <span className="cell">{value[num]}</span>;
}
