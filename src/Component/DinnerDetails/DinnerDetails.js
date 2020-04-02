import React from 'react';
import { useParams } from 'react-router-dom';
import foodData from '../../foodData/dinner'
import BreakfastDetails from '../BreakfastDetails/BreakfastDetails';

const DinnerDetails = () => {
    const {foodkey} = useParams();
    const foods = foodData.fond( allFood => allFood.key === foodkey);
    const {name, subName, details, image, price, key} = foods;
    return (
        <div className="fullCard container">
            <div className="cardDetails">
                <h1>{name}</h1>
                <p>{details}</p>
                <h1>${price}</h1>            
            </div>
            <div className="cardImage">
                <img src={image} alt=""/>
            </div>
        </div>
    );
};

export default DinnerDetails;