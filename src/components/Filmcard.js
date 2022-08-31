import './Filmcard.css'

const Filmcard = (props) => {
    return (
        <div className="filmcard">
            <h3>{props.title}</h3>
            <p>{props.year}</p>
            <p>{props.director}</p>
            <p>{props.duration}</p>
            <p>{props.rate}</p>
            <article>{props.genre.map(item => <p>{item}</p>)}</article>
        </div>
    )
}

export default Filmcard