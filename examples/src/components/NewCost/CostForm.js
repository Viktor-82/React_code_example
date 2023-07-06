import React, { useState } from "react";
import './CostForm.css';

const CostForm = () => {

// Вариант с использованием одного состояния для всей формы. В одну переменную userInput прописываем объект с данными
    const [userInput, setUserInput] = useState({
        name: '',
        amount: '',
        date: ''
    });

    // Обработчики для каждого поля остаются с уникальными названиями
    // Для input "Название"
    const nameChangeHandler = (event) => {
// Обновление данных при помощи передачи функции с предыдущим состоянием
        setUserInput((previousState) => {
            return {
                ...previousState,
                name: event.target.value
            }
        })
    };

    // Для input "Сумма"
    const amountChangeHandler = (event) => {
        setUserInput((previousState) => {
            return {
                ...previousState,
                amount: event.target.value
            }
        })
    };

    // Для input "Дата"
    const dateChangeHandler = (event) => {
        setUserInput((previousState) => {
            return {
                ...previousState,
                date: event.target.value
            }
        })
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