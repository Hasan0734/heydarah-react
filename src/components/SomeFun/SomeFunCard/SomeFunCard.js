import React from 'react';
import './SomeFunCard.css'
import Parse from 'html-react-parser'
import CountUp from 'react-countup';
const SomeFunCard = ({ item }) => {
    return (
        <div className='col-lg-3 col-mg-6'>
            <div className="card bg-transparent some-card">
                <div className='card-body d-flex align-items-center justify-content-center'>
                    <div>
                        <span>
                            {Parse(item.icon)}
                        </span>
                        <h1 className='number'>
                            <CountUp end={item.number} />
                        </h1>

                        <h4 className='title'>{item.title}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SomeFunCard;