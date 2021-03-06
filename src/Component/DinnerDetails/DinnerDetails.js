import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import foodData from '../../foodData/dinner'

const DinnerDetails = () => {
    const {foodkey} = useParams();
    const foods = foodData.find( allFood => allFood.key === foodkey);
    const {name, details, image, price} = foods;
    const [count, setCount] = useState(1);

    return (
        <div className="fullCard container">
            <div className="cardDetails">
                <h1>{name}</h1>
                <p>{details}</p>
                <div className="priceBtn">
                    <h1>${price}</h1>
                    <div className="button">
                        <div className="btnBox">
                            <button className="twoBtn" onClick={ () => setCount(count - 1)}>-</button><span>{count}</span>
                            <button className="twoBtn" onClick={ () => setCount(count + 1)}>+</button>
                        </div>
                    </div> 
                </div>           
            </div>
            <div className="cardImage">
                <img src={image} alt=""/>
            </div>
        </div>
    );
};

export default DinnerDetails;