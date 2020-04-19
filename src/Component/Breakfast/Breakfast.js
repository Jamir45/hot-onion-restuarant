import React, { useState } from 'react';
import foodData from '../../foodData/breakfast'
import BreakfastFood from '../BreakfastFood/BreakfastFood';
import './Breakfast.css'

const Breakfast = () => {

    const [data, setData] = useState(foodData)
    const [cart, setCart] = useState([])
    const cartHandler = (clickedFood) => {
        const food = [...cart, clickedFood]
        setCart(food)
    };
    return (
        <div>
            
            <div>
                <h2 style={{textAlign:"center"}}>Breakfast Item</h2>
                <div className="row container">
                    {
                        data.map( (singleDat) => <BreakfastFood allSingleData={singleDat} cartHandler={cartHandler} ></BreakfastFood> )
                    }
                </div>
                
            </div>
            <div>

            </div>
        </div>
    );
};

export default Breakfast;