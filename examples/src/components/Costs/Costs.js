import CostItem from "./CostItem";
import './Costs.css';
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import React, {useState} from "react";

const Costs = (props) => {

    const [selectYear, setYear] = useState('2019');

    const changeYearHandler = (year) => {
        setYear(year);
        console.log(selectYear, 'State from Costs.js');
    };

     // Метод фильтрует отображение компонентов по году
    const filteredCosts = props.costs.filter(cost => {
        return cost.date.getFullYear().toString() === selectYear;
    })
    // В реакт можно сохранять JSX в переменную
    let constContent = <p>В этом году расходов нет</p>;

    if (filteredCosts.length > 0) {
        constContent =
            filteredCosts.map(cost => (
            <CostItem
                key={cost.id} // без установки этого значения отображение данных некорректное
                date={cost.date}
                description={cost.description}
                amount={cost.amount}
            />
        ))
    }

     return (
         <div>
             <Card className='costs'>
             <CostsFilter year={selectYear} onChangeYear={changeYearHandler} />
             {constContent}
             </Card>
         </div>

     )

}

export default Costs;