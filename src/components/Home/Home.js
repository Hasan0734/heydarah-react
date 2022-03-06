import React from 'react';
import About from '../About/About';
import Header from '../Header/Header';
import HeaderNav from '../Navbar/Navbar';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
           <HeaderNav/>
           <Header/>
           <About/>
           <Services/>
        </>
    );
};

export default Home;