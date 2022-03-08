import React from 'react';
import parse from 'html-react-parser'
import './Category.css'
const Category = ({feature, setDetail}) => {
    return (
            <div onClick={() => setDetail(feature)} className='rounded rounded-3 mb-1 card border-bottom border-3 bg-transparent'>
                <div className='card-body text-white d-flex gap-3 category-card'>
                    <span className='fs-2'>
                        {parse(feature.icon)}
                    </span>
                    <div>
                        <h4 className='title'>{feature.title}</h4>
                        <h6 className='sub-title'>{feature.subTitle}</h6>
                    </div>
                </div>
            </div>  
    );
};

export default Category;