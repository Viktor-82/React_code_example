import './CostItem.css';
import './CostDate';
import CostDate from "./CostDate";
import Card from "../UI/Card";

const CostItem = (props) => {
    // Функция для которая запускается при нажатии на элемент объявляется для чистоты кода заранее
    const changeDescriptionHandler = () => {
        console.log('Click Clack')
    }

    return (<Card className='cost-item'>
                <CostDate date={props.date}/>
                <div className='cost-item__description'>
                    <h2>{props.description}</h2>
                    <div className='cost-item__price'>${props.amount}</div>
                </div>
            {/* В синтаксисе React таким образом добавляется слушатель событий на элемент. Вызов функции ()
            не ставим иначе она запустится при парсинге страницы. Название функции для обработчика событий желательно
            заканчивать на Handler. Таким образом логически понятно что это функция предназначена для обработчика */}
            <button onClick={changeDescriptionHandler}>Изменить описание</button>
            </Card>
    );
}

export default CostItem;