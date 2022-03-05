import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, CardImg } from 'react-bootstrap';
import Image1 from '../../../assets/about/about1.jpg'
import Image2 from '../../../assets/about/about2.jpg'
import './AboutSlider.css'
const AboutSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        pauseOnDotsHover: false,
        draggable: false,
        swipeToSlide: false
    };

    return (
        <div>
            <div className='about-slider'>
                <Slider {...settings}>
                    <div className=''>
                        <Card className='card-shodow'>
                            <Card.Img variant="top" src={Image1} />
                            <Card.Body className='about-slider-card'>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                            
                        </Card>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default AboutSlider;