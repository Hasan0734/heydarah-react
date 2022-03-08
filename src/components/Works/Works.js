import React, { useState } from 'react';
import './Works.css';
import Icon from '../../assets/heydarah-icon.png';
import WorksCard from './WorksCard/WorksCard';
import SectionHead from '../SectionHead/SectionHead';


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
        title: 'Web'
    },
    {
        id: 3,
        img: 'https://i.ibb.co/KsG0YnP/item-7.jpg',
        title: 'Branding'
    },
    {
        id: 4,
        img: 'https://i.ibb.co/ggXLTwg/item-4.jpg',
        title: 'Branding'
    },
    {
        id: 5,
        img: 'https://i.ibb.co/p39Fs7n/item-3.jpg',
        title: 'Video'
    },
    {
        id: 6,
        img: 'https://i.ibb.co/3TH9j9Q/item-2.jpg',
        title: 'Web'
    },
    {
        id: 8,
        img: 'https://i.ibb.co/M2fs9Nd/item-1.jpg',
        title: 'Video'
    },
]
const Works = () => {
    const [tab, setTab] = useState('all')

    const videoWork = worksData.filter(item => item.title === 'Video')
    const photography = worksData.filter(item => item.title === 'Photography')
    const branding = worksData.filter(item => item.title === 'Branding')
    const web = worksData.filter(item => item.title === 'Web')
   
    return (
        <section id='Work' className='work-section'>
            <div className='container-fluid'>
               <SectionHead title={"Works"}/>
               
                <div className='tab-section'>
                    <ul className='text-white d-flex gap-4 flex-wrap'>
                        <li><a className={`${tab === 'all' ? 'active' : ''}`} onClick={() => setTab('all')} href="#all">All</a></li>
                        <li><a className={`${tab === 'branding' ? 'active' : ''}`} onClick={() => setTab('branding')} href="#branding">Branding</a></li>
                        <li><a className={`${tab === 'web' ? 'active' : ''}`} onClick={() => setTab('web')} href="#web">Web</a></li>
                        <li><a className={`${tab === 'video' ? 'active' : ''}`} onClick={() => setTab('video')} href="#video">Video</a></li>
                        <li><a className={`${tab === 'photography' ? 'active' : ''}`} onClick={() => setTab('photography')} href="#photography">Photography</a></li>
                    </ul>
                </div>
                <div className='row'>

                    {tab === 'all' && worksData.map((item, i) => <WorksCard  key={i} item={item}/>)}
                    {tab === 'video' && videoWork.map((item, i) => <WorksCard key={i}  item={item}/>)}
                    {tab === 'web' && web.map((item, i) => <WorksCard key={i}  item={item}/>)}
                    {tab === 'photography' && photography.map((item, i) => <WorksCard key={i}  item={item}/>)}
                    {tab === 'branding' && branding.map((item, i) => <WorksCard key={i}  item={item}/>)}

                </div>
            </div>
        </section>
    );
};

export default Works;