import React from 'react';
import './WorksCard.css'
const WorksCard = ({ item }) => {
    return (
        <>
            <div className='col-lg-3 col-md-6 col-sm-6  col-12 mb-4'>
                <div className='card border-0 card-image'>
                    <img className='card-img-top position-relative' src={item.img} alt="" />
                    <div className='d-flex justify-content-center overlay-card align-items-center'>
                        <div className='text-center text-white'>
                            <span className='work-search-icon'>
                                <i className='fa fa-search'></i>
                            </span>
                            <h4 className='mt-3'>Add your title</h4>
                            <h5>{item.title}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WorksCard;