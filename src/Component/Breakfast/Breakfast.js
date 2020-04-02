import React, { useState } from 'react';
import foodData from '../../foodData/breakfast'
import BreakfastFood from '../BreakfastFood/BreakfastFood';
import './Breakfast.css'

const Breakfast = () => {

    const [data, setData] = useState(foodData)
    console.log(data)
    return (
        <div>
            
            <div>
                <div className="row container">
                    {
                        data.map( singleDat=> <BreakfastFood allSingleData={singleDat}></BreakfastFood> )
                    }
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Breakfast;