import React, { useState } from 'react';
import './Works.css';
import Icon from '../../assets/heydarah-icon.png';
import WorksCard from './WorksCard/WorksCard';


const worksData = [
    {
        id: 1,
        img: 'https://i.ibb.co/HpPYYmF/item-8.jpg',
        title: 'Photography'
    },
    {
        id: 2,
        img: 'https://i.ibb.co/d0D46zs/item-6.jpg',
        title: 'Photography'
    },
    {   id: 7,
        img: 'https://i.ibb.co/LkvC4b0/item-5.jpg',
        title: 'Photography'
    },
    {
        id: 3,
        img: 'https://i.ibb.co/KsG0YnP/item-7.jpg',
        title: 'Photography'
    },
    {
        id: 4,
        img: 'https://i.ibb.co/ggXLTwg/item-4.jpg',
        title: 'Photography'
    },
    {
        id: 5,
        img: 'https://i.ibb.co/p39Fs7n/item-3.jpg',
        title: 'Video'
    },
    {
        id: 6,
        img: 'https://i.ibb.co/3TH9j9Q/item-2.jpg',
        title: 'Photography'
    },
    {
        id: 8,
        img: 'https://i.ibb.co/M2fs9Nd/item-1.jpg',
        title: 'Video'
    },
]
const Works = () => {
    const [tab, setTab] = useState('all')
    return (
        <section id='Work' className='work-section'>
            <div className='container-fluid'>
                <div className='service-title-section d-flex justify-content-center'>
                    <div>
                        <h1 className='text-color text-center'>Services</h1>
                        <div className='mt-4 d-flex justify-content-center align-items-center gap-4'>
                            <span className='icon-line'></span>
                            <img src={Icon} alt="" />
                            <span className='icon-line'></span>
                        </div>
                    </div>
                </div>
                <div className='tab-section'>
                    <ul className='text-white d-flex gap-4 flex-wrap'>
                        <li><a className={`${tab === 'all' ? 'active' : ''}`} onClick={() => setTab('all')} href="javascript:;">All</a></li>
                        <li><a className={`${tab === 'branding' ? 'active' : ''}`} onClick={() => setTab('branding')} href="javascript:;">Branding</a></li>
                        <li><a className={`${tab === 'web' ? 'active' : ''}`} onClick={() => setTab('web')} href="javascript:;">Web</a></li>
                        <li><a className={`${tab === 'video' ? 'active' : ''}`} onClick={() => setTab('video')} href="javascript:;">Video</a></li>
                        <li><a className={`${tab === 'photography' ? 'active' : ''}`} onClick={() => setTab('photography')} href="javascript:;">Photography</a></li>
                    </ul>
                </div>
                <div className='row'>
                    {worksData.map((item, i) => <WorksCard item={item}/>)}
                </div>
            </div>
        </section>
    );
};

export default Works;