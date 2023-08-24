import React, { useState } from "react";
import './CostItem.css';
import './CostDate';
import CostDate from "./CostDate";
import Card from "../UI/Card";


const CostItem = (props) => {

    const [description, setDescription] = useState(props.description);

    const changeDescriptionHandler = () => {
        setDescription('NewCost')
    }

    return (
        <li>
        <Card className='cost-item'>
                <CostDate date={props.date}/>
                <div className='cost-item__description'>
                    <h2>{description}</h2>
                    <div className='cost-item__price'>${props.amount}</div>
                </div>
            </Card>
        </li>
    );
}

export default CostItem;