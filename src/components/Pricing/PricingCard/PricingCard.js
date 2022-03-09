import React from 'react';
import './PricingCard.css'
const PricingCard = ({price}) => {
    return (
        <div className='col-lg-4 col-md-6 mb-4 mb-lg-0'>
            <div className='card price-card border-0 card-shadow'>
                <div className='card-body'>
                    <div className='pack-type'>
                        <p>{price.type}</p>
                    </div>
                    <div className='pack-head'>
                        <h3 className='pack-name'>{price.pack_name}</h3>
                        <h1 className='pack-price'>${price.price}<span>/month</span></h1>
                    </div>
                    <div>
                        <ul className='card-service'>
                           {price.service.map((item, i) => <li>{item}</li>)}
                        </ul>
                    </div>
                    <div className='text-center mt-4'>
                        <button className='common-btn'>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;