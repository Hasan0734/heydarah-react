import React from 'react';
import './ServiceCard.css'
import parse from 'html-react-parser';
const ServiceCard = ({ service }) => {
    const { title, text, icon } = service
    return (
        <div className='col-md-12 col-lg-4 '>
            <div className="card service-card border-0 m-2">
                <div className="card-body d-flex justify-content-between">
                    <div className='service-icon-box'>
                        <div className='icon-line'></div>
                        <div className='service-icon-area text-color'>
                            {parse(icon)}
                        </div>
                        <div className='icon-line'></div>
                    </div>
                    <div className='text-white'>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;