import React from 'react';
import { Container } from 'react-bootstrap';
import './Services.css'
import Icon from '../../assets/heydarah-icon.png'
import ServiceCard from './ServiceCard/ServiceCard';
import SectionHead from '../SectionHead/SectionHead';

const serviceData = [

    {
        id: 1,
        title: "Branding",
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&sbquo;s standard dummy text ever since the 1500s .',
        icon: '<i className="fa-brands fa-github"></i>'
    },
    {
        id: 2,
        title: "Development",
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&sbquo;s standard dummy text ever since the 1500s .',
        icon: ' <i className="fa fa-pencil"></i>'
    },
    {
        id: 1,
        title: "Consolting",
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&sbquo;s standard dummy text ever since the 1500s .',
        icon: '<i className="fa fa-bullhorn"></i>'
    }
]


const Services = () => {
    return (
        <section id='Services' className='service-section'>
            <Container>
                <SectionHead title={'Services'}/>
                <div className='service-card-area'>
                    <div className='row'>
                        {serviceData.map((item, i) => <ServiceCard key={i} service={item} />)}
                    </div>
                </div>
                <div className='text-center mt-5'>
                    <button className='common-btn'>More Services</button>
                </div>
            </Container>
        </section>
    );
};

export default Services;