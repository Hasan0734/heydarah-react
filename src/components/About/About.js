import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css'
import Icon from '../../assets/heydarah-icon.png'
import AboutSlider from './AboutSlider/AboutSlider';
const About = () => {

    return (
        <section className='about-section'>
            <Container >
                <div className='about-title-section d-flex justify-content-center'>
                    <div>
                        <h1 className='text-color text-center'>About Us</h1>
                        <div className='mt-4 d-flex justify-content-center align-items-center gap-4'>
                           <span className='icon-line'></span>
                           <img src={Icon} alt="" />
                           <span className='icon-line'></span>
                        </div>
                    </div>
                </div>
                <AboutSlider/>
            </Container>
        </section>
    );
};

export default About;