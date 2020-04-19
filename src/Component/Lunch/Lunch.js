import React from 'react';
import { useState } from 'react';
import foodData from '../../foodData/lunch'
import LunchFood from '../LunchFood/LunchFood';

const Lunch = () => {
    const [data, setData] = useState(foodData);
    const [cart, setCart] = useState([]);
    const cartHandler = (clickedFood) => {
        const food = [...cart, clickedFood]
        setCart(food)
    };
    return (
        <div>
            <div>
            <h2 style={{textAlign:"center"}}>Lunch Item</h2>
                <div className="row container">
                    {
                        data.map( (singleDat) => <LunchFood allSingleData={singleDat} cartHandler={cartHandler} ></LunchFood> )
                    }
                </div>
                
            </div>
            <div>

            </div>
        </div>
    );
};

export default Lunch;