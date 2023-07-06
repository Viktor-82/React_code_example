import React, { useState } from "react";
import './CostForm.css';

const CostForm = () => {
    // Все состояния для всем input_ов
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    // Для input "Название"
    const nameChangeHandler = (event) => {
        setName(event.target.value);
    };

    // Для input "Сумма"
    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };

    // Для input "Дата"
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };

    return <form>
        <div className="new-cost__controls">
            <div className="new-cost__control">
                <label>Название</label>
                <input type="text" onChange={nameChangeHandler}/>
            </div>
            <div className="new-cost__control">
                <label>Сумма</label>
                <input type="number" onChange={amountChangeHandler} min="0.01" step="0.01"/>
            </div>
            <div className="new-cost__control">
                <label>Дата</label>
                <input type="date" onChange={dateChangeHandler} min="2019-01-01" max="2023-12-31"/>
            </div>
            <div className="new-cost__actions">
                <button type="submit">Добавить расход</button>
            </div>
        </div>
    </form>
}


export default CostForm;