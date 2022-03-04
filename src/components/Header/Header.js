import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Header.css'
const Header = () => {


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
        <>

            <div>
                <Slider {...settings}>
                    <div className='header-slider-1'>
                        <h1>Hello world</h1>
                    </div>
                    <div className='header-slider-2'>
                        <div className='slider-content'>
                            <div className='d-flex justify-content-center'>
                                <div className='text-center'>
                                    <h1 className='text-white display-2'>Meet <span className='fw-bold'>Heydarah!</span></h1>
                                    <h2 className='text-white display-4'><span className='text-color'>/creative</span> one page template.</h2>
                                    <p className='text-white fs-5 d-flex justify-content-center gap-3 align-items-center'>
                                        <div className='border-design'></div>
                                        We are a team of professionals <div className='border-design'></div></p>
                                    <button onClick={() => alert("Hello wrld")} className='common-btn'>Get Started</button>
                                </div>
                            </div>

                        </div>
                    </div>

                </Slider>
            </div>

        </>
    );
};

export default Header;