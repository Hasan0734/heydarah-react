import React from 'react';
import About from '../About/About';
import Clients from '../Clients/Clients';
import Discuss from '../Discuss/Discuss';
import Features from '../Features/Features';
import Header from '../Header/Header';
import LatestPost from '../LatestPost/LatestPost';
import HeaderNav from '../Navbar/Navbar';
import OurTeam from '../OurTeam/OurTeam';
import Pricing from '../Pricing/Pricing';
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
           <Pricing/>
           <LatestPost/>
           <Discuss/>
        </>
    );
};

export default Home;