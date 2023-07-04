import './Card.css';

function Card(props) {
    const classes = "card " + props.className;
    // Использование "реквизита" существующего по умолчанию props.children для получения значений находящихся между
    // открывающим и закрывающим тегами компонента
    return <div className={classes}>{props.children}</div>
}

export default Card;