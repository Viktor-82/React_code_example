import './CostItem.css';
import './CostDate';
import CostDate from "./CostDate";
import Card from "../UI/Card";
// Для того чтобы React после отрисовки страницы отражал изменения (парсил элемент заново)
// необходимо сделать именованный импорт функции useState из библиотеки React в элемент где стоят обработчики событий
import React, { useState } from "react";

const CostItem = (props) => {
    // Чтобы useState(); сработал нужно его вызвать внутри компонента попутно вытащить из него значения деструктуризацией
    const [description, setDescription] = useState(props.description);


    const changeDescriptionHandler = () => {
        // Здесь в функцию передаем значение которое нужно установить в переменной
        // идет присваивание переменной нового значения + вызов компонента
        // description='New cost'; & CostItem(props);
        setDescription('New cost');
    }

    return (<Card className='cost-item'>
                <CostDate date={props.date}/>
                <div className='cost-item__description'>
                    <h2>{description}</h2>
                    <div className='cost-item__price'>${props.amount}</div>
                </div>
            <button onClick={changeDescriptionHandler}>Изменить описание</button>
            </Card>
    );
}

export default CostItem;