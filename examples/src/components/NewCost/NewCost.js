import CostForm from "./CostForm";
import './NewCost.css';
// передаем в пропсе атрибут из App
const NewCost = (props) => {
    // Функция выводит параметр который в нее передают. Передан в нее объект costData из CostForm.js
    const saveCostDataHandler = (inputCostData) => {
    // обязательно создаем переменную и в нее уже деструктуризируем переданный объект+добавляем новое значение id.
        const costData = {
            ...inputCostData,
            id: Math.random().toString()
        }
        // console.log(costData);
        // Вызываем обработчик из App передаем в него данные для App
        props.onAddCost(costData);
    }

    return (
        <div className="new-cost">
            {/* Пишем свой атрибут компоненту CostForm для отправки данных из CostForm в компонент из которого
            он вызывается (в NewCost). Название атрибута произвольное. В атрибут передаем функцию обработчик. */}
            <CostForm onSaveCostData={saveCostDataHandler} />
        </div>
    )
}

export default NewCost;