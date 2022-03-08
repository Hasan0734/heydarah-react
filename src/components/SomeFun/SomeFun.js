import React from 'react';
import SectionHead from './../SectionHead/SectionHead';
import './SomeFun.css'
import SomeFunCard from './SomeFunCard/SomeFunCard';

const data = [
    {
        icon: '<i className="fa-solid fa-users"></i>',
        title: 'Hours of work',
        number: 3200
    },
    {
        icon: '<i className="fa-solid fa-users"></i>',
        title: 'Satisfied Clients',
        number: 120
    },
    {
        icon: '<i className="fa-solid fa-rocket"></i>',
        title: 'Projects Delivered',
        number: 360
    },
    {
        icon: '<i className="fa-solid fa-trophy"></i>',
        title: 'Awards Won',
        number: 6454
    },
]

const SomeFun = () => {
    return (
        <section className='some-fun'>
                <div className='container'>
                    <SectionHead title={"Some Fun Facts"} />

                    <div className='some-card-area'>
                        <div className='row'>
                            {data.map((item, i) => <SomeFunCard key={i} item={item} />)}
                        </div>
                    </div>
                </div>
            
        </section>
    );
};

export default SomeFun;