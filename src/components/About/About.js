import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css'
import Icon from '../../assets/heydarah-icon.png'
import AboutSlider from './AboutSlider/AboutSlider';
import SectionHead from '../SectionHead/SectionHead';
const About = () => {

    return (
        <section id="About" className='about-section'>
            <Container >
                <SectionHead title={"About"} />
                <AboutSlider />
            </Container>
        </section>
    );
};

export default About;