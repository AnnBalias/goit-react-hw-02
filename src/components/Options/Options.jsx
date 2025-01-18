import css from "./Options.module.css"

const Options = ({ updType, resetType, total }) => {   

    return (
        <div>
            <button onClick={() => updType("good")}>Good</button>
            <button onClick={() => updType("neutral")}>Neutral</button>
            <button onClick={() => updType("bad")}>Bad</button>
            {total !== 0 && <button onClick={() => resetType()}>Reset</button>}
        </div>
    )
}

export default Options;