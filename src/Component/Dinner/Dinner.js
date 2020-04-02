import React, { useState } from 'react';
import foodData from '../../foodData/dinner';
import DinnerFood from '../DinnerFood/DinnerFood';

const Dinner = () => {
    const [data, setData] = useState(foodData)
    const [cart, setCart] = useState([]);
    const cartHandler = (clickedFood) => {
        // const food = [...cart, clickedFood]
        // setCart(food)
    };
    return (
        <div>
            
            <div>
                <div className="row container">
                    {
                        data.map( (singleDat) => <DinnerFood allSingleData={singleDat} cartHandler={cartHandler} ></DinnerFood> )
                    }
                </div>
                
            </div>
            <div>

            </div>
        </div>
    );
};

export default Dinner;