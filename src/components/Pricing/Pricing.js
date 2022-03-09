import React from 'react';
import SectionHead from '../SectionHead/SectionHead';
import './Pricing.css'
import PricingCard from './PricingCard/PricingCard';

const priceData = [
    {
        id: 1,
        type: 'Medium',
        pack_name: 'Standard',
        price: 90,
        service: [
            'Good performance', 'Low Speed', 'One Host', 'One Time Free Update', 'SSD Server Setup', 'Three Months Service'
        ]
    },
    {
        id: 2,
        type: 'High',
        pack_name: 'Pro',
        price: 190,
        service: [
            'Good performance', 'High Speed', 'Free Server', 'Full Time Free Update', 'SSD Server Setup', 'Huge Space'
        ]
    },
    {
        id: 3,
        type: 'Exclusive',
        pack_name: 'Premium',
        price: 80,
        service: [
            'Good performance', 'High Speed', 'Free Server', 'Full Time Free Update', 'SSD Server Setup', 'Free Space'
        ]
    },
]
const Pricing = () => {
    return (
        <section id='Pricing' className='price-section'>
            <div className='container'>
                <SectionHead title={"Our Pricing"} />
                <div className='pricing-area'>
                    <div className='row'>
                       {priceData.map((price, i) =>  <PricingCard key={i} price={price}/>)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;