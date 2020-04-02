import React from 'react';
import './BreakfastFood.css'

const BreakfastFood = (props) => {
    const {name, subName, image, price} = props.allSingleData
    return (
            <div className="col-md-4 md-4">
                <a href="/BreakfastDetails">
                    <div className="card text-center">
                        <img id="imgSize" src={image} alt=""/>
                        <div className="card-body">
                            <h5>{name}</h5>
                            <p>{subName}</p>
                            <h4>${price}</h4>
                        </div>
                    </div>
                </a>
            </div>
    );
};

export default BreakfastFood;