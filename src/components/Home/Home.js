import React from 'react';
import About from '../About/About';
import Clients from '../Clients/Clients';
import Features from '../Features/Features';
import Header from '../Header/Header';
import HeaderNav from '../Navbar/Navbar';
import OurTeam from '../OurTeam/OurTeam';
import Services from '../Services/Services';
import SomeFun from '../SomeFun/SomeFun';
import Works from './../Works/Works';

const Home = () => {
    return (
        <>
           <HeaderNav/>
           <Header/>
           <About/>
           <Services/>
           <Works/>
           <OurTeam/>
           <Features/>
           <SomeFun/>
           <Clients/>
        </>
    );
};

export default Home;