import React from 'react';
import About from '../About/About';
import Header from '../Header/Header';
import HeaderNav from '../Navbar/Navbar';
import Services from '../Services/Services';
import Works from './../Works/Works';

const Home = () => {
    return (
        <>
           <HeaderNav/>
           <Header/>
           <About/>
           <Services/>
           <Works/>
        </>
    );
};

export default Home;