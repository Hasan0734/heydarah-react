import React from 'react';
import About from '../About/About';
import Header from '../Header/Header';
import HeaderNav from '../Navbar/Navbar';

const Home = () => {
    return (
        <>
           <HeaderNav/>
           <Header/>
           <About/>
        </>
    );
};

export default Home;