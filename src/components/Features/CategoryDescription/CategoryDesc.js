import React from 'react';
import './CategoryDesc.css'
const CategoryDesc = ({detail}) => {
    return (
        <div className='mb-3 cate-desc'>
            <div className='text-white'>
                <h2 className='title'>{detail.title}</h2>
                <p className='text'>{detail.description}</p>
            </div>
            <div>
                <img className='w-100' src={detail.image} alt="" />
            </div>
        </div>
    );
};

export default CategoryDesc;