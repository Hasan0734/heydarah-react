import React from 'react';
import './ClientSlider.css';
const ClientSlider = ({client}) => {
    return (
        <div className='p-3 client-card'>
            <div className='card-shadow p-5 mb-3'>
                <div className='d-flex justify-content-center'>
                    <img className='rounded-circle' src={client.image} alt="" />
                </div>
                <div className='text-white text-center'>
                    <h3 className='text-color name'>{client.name}</h3>
                    <h5 className='title'>{client.title}</h5>
                    <p className='text'>{client.text}</p>
                        
                </div>
            </div>
        </div>
    );
};

export default ClientSlider;