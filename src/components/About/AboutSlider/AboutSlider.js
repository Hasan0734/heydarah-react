import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, CardImg, Row } from 'react-bootstrap';
import Image1 from '../../../assets/about/about1.jpg'
import Image2 from '../../../assets/about/about2.jpg'
import './AboutSlider.css'


const sliderData = [
    {
        id: 1,
        title: "Welcome To Hydrash",
        text: "Heydarah is a Bootstrap v4 responsive template .Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
        image: Image1

    },
    {
        id: 2,
        title: "Thank you for choosing up.",
        text: "Heydarah is a Bootstrap v4 responsive template .Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
        image: Image2

    }

]

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
        <div className='about-slider'>
            <div className='card-shodow pb-5'>
                <Slider {...settings}>
                    {sliderData.map((item, i) => <div key={i} className='card about-slider-card pb-3'>
                        <div className='row'>
                            <div className='col-12 col-lg-6'>
                                <img src={item.image} alt="" className='card-img-top' />
                            </div>
                            <div className='col-12 col-lg-6'>
                                <div className='card-body card-body-text'>
                                    <div className='card-title'>
                                        <h3>{item.title}</h3>
                                    </div>
                                    <div className='card-text'>
                                        <p>{item.text}</p>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae error beatae sit voluptas, iure placeat alias nostrum fugit consequatur excepturi deserunt earum laboriosam officiis?</p>
                                    </div>

                                    <ul className='social-icon'>
                                        <li>
                                            <a className='text-white' href="/"><i className="fa-brands fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a className='text-white' href="/"><i className="fa-brands fa-facebook-f"></i> </a>
                                        </li>
                                        <li>
                                            <a className='text-white' href="/"><i className="fa-brands fa-google-plus-g"></i> </a>
                                        </li>
                                        <li>
                                            <a className='text-white' href="/"> <i className="fa-brands fa-dribbble"></i> </a>
                                        </li>
                                    </ul>
                                    <button className='common-btn'>Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>)}
                </Slider>
            </div>

        </div>
    );
};

export default AboutSlider;