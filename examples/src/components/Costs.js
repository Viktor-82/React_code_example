// Импортируем компонент CostItem. Он нужен только для того чтобы вернуть заданную разметку в App.js
import CostItem from "./CostItem";
import './Costs.css';

function Costs(props) {

     return (
         <div className='costs'>
              {/* Синтаксис обращения к переданым ранее "реквизитам" props */}
              <CostItem date={props.costs[0].date} description={props.costs[0].description} amount={props.costs[0].amount}/>
              <CostItem date={props.costs[1].date} description={props.costs[1].description} amount={props.costs[1].amount}/>
              <CostItem date={props.costs[2].date} description={props.costs[2].description} amount={props.costs[2].amount}/>
         </div>
     )
}

export default Costs;