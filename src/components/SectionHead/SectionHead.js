import React from 'react';
import Icon from '../../assets/heydarah-icon.png';
import './SectionHead.css'
const SectionHead = ({title}) => {
    return (
        <>
            <div className='title-section d-flex justify-content-center opacity-100'>
                <div>
                    <h1 className='text-color text-center'>{title}</h1>
                    <div className='mt-4 d-flex justify-content-center align-items-center gap-4'>
                        <span className='icon-line'></span>
                        <img src={Icon} alt="" />
                        <span className='icon-line'></span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SectionHead;