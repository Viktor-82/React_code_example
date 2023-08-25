import './Costs.css';
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";
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

     return (
         <div>
             <Card className='costs'>
             <CostsFilter year={selectYear} onChangeYear={changeYearHandler} />
             <CostsDiagram costs={filteredCosts}/>
             <CostList costs={filteredCosts}/>
             </Card>
         </div>
     )
}

export default Costs;