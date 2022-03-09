import React from 'react';
import SectionHead from '../SectionHead/SectionHead';
import './Clients.css';
import Slider from "react-slick";
import ClientSlider from './ClientSlider/ClientSlider';

const clientData = [
    {
        image: 'https://i.ibb.co/NYbPzSW/review-person-one.jpg',
        name: 'Rasel',
        title: 'Web Developer',
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium ad asperiores at atque culpa dolores eaque fugiat hic illo ipsam ipsum minima modi necessitatibus nemo officia, omnis perferendis placeat sit vitae, consectetur adipisicing elit ipsam."
    },
    {
        image: 'https://i.ibb.co/G90Rygw/review-person-two.jpg',
        name: 'Nasir',
        title: 'Web Designer',
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium ad asperiores at atque culpa dolores eaque fugiat hic illo ipsam ipsum minima modi necessitatibus nemo officia, omnis perferendis placeat sit vitae, consectetur adipisicing elit ipsam."
    }
]

const Clients = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        useTransform: true,
        speed: 1000,
        

    };
    return (
        <section id='Client' className='client-section'>
            <div className='container'>
                <SectionHead title={"Happy Clients"} />
                <div className='client-slider-area'>
                    <div className="row">
                        <div className='col-2'></div>
                        <div className='col-8'>
                            <Slider {...settings}>
                            {clientData.map((client, i) => <ClientSlider key={i} client={client}/>)}
                            </Slider>
                        </div>
                        <div className='col-2'></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;