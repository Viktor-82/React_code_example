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

     return (
         <div>
             <Card className='costs'>
             <CostsFilter year={selectYear} onChangeYear={changeYearHandler} />
             {/* Пишем код для динамического отображения данных. Внизу закоментирован статический код как пример */}
             {props.costs.map(cost => (
                 <CostItem
                 key={cost.id} // без установки этого значения отображение данных некорректное
                 date={cost.date}
                 description={cost.description}
                 amount={cost.amount}
             />
                     ))}
                 {/*<CostItem date={props.costs[0].date} description={props.costs[0].description} amount={props.costs[0].amount}/>*/}
                 {/*<CostItem date={props.costs[1].date} description={props.costs[1].description} amount={props.costs[1].amount}/>*/}
                 {/*<CostItem date={props.costs[2].date} description={props.costs[2].description} amount={props.costs[2].amount}/>*/}
             </Card>
         </div>

     )

}

export default Costs;