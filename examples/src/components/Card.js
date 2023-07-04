import './Card.css';

function Card(props) {
    // Динамическое присоединение классов в коде
    const classes = "card " + props.className;
    return <div className={classes}>{props.children}</div>
}

export default Card;