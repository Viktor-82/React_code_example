import React, { useState } from "react";
import './CostForm.css';

const CostForm = () => {
    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);
    };
{/* Предотвращаем поведение по умолчанию */}
    const submitHandler = (event) => {
        event.preventDefault();

        const costData = {
            name: inputName,
            amount: inputAmount,
            date: new Date(inputDate)
        };
        console.log(costData);
{/* Для двустороннего связывания вызываем функцию обновлени значения переменной и передаем в нее пустую строку */}
        setInputName('');
        setInputAmount('');
        setInputDate('');
    };

    return <form onSubmit={submitHandler}>
        <div className="new-cost__controls">
            <div className="new-cost__control">
                <label>Название</label>
{/* Для двустороннего связывания добавляем атрибут value и передаем в него переменную */}
                <input type="text" value={inputName} onChange={nameChangeHandler}/>
            </div>
            <div className="new-cost__control">
                <label>Сумма</label>
                <input type="number" value={inputAmount} onChange={amountChangeHandler} min="0.01" step="0.01"/>
            </div>
            <div className="new-cost__control">
                <label>Дата</label>
                <input type="date" value={inputDate} onChange={dateChangeHandler} min="2019-01-01" max="2023-12-31"/>
            </div>
            <div className="new-cost__actions">
                <button type="submit">Добавить расход</button>
            </div>
        </div>
    </form>
}


export default CostForm;