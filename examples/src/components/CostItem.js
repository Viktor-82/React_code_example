import './CostItem.css';
import './CostDate';
import CostDate from "./CostDate";
import Card from "./Card";

function CostItem(props) {
    // Использование компонента Card в качестве обертки для другого компонента для его стилизации
    return (<Card className='cost-item'>
                <CostDate date={props.date}/>
                <div className='cost-item__description'>
                    <h2>{props.description}</h2>
                    <div className='cost-item__price'>${props.amount}</div>
                </div>
            </Card>
    );
}

export default CostItem;