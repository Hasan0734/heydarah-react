import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Logo from '../../assets/logo.png'
import './Navbar.css'
import { useLocation } from 'react-router-dom';
const HeaderNav = () => {
   const {hash} = useLocation()
    return (
        <>
            <Navbar expand="lg" fixed="top" variant='dark' className='py-1' style={{ backgroundColor: 'rgb(43, 44, 48)' }}>
                <Container fluid>
                    <Navbar.Brand href='#home'>
                        <img
                            src={Logo}
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav bg-primary" />
                    <Navbar.Collapse id="basic-navbar-nav" className='ms-3 ms-lg-0'>
                        <Nav className="ms-auto gap-2 navbar-items">
                            <Nav.Link className={`${ hash === '#Home' ? 'navbar-active' : ''}`} href="#Home">Home</Nav.Link>
                            <Nav.Link className={`${ hash === '#About' ? 'navbar-active' : ''}`} href="#About">About</Nav.Link>
                            <Nav.Link className={`${ hash === '#Services' ? 'navbar-active' : ''}`} href="#Services">Services</Nav.Link>
                            <Nav.Link className={`${ hash === '#Work' ? 'navbar-active' : ''}`} href="#Work">Work</Nav.Link>
                            <Nav.Link className={`${ hash === '#Team' ? 'navbar-active' : ''}`} href="#Team">Team</Nav.Link>
                            <Nav.Link className={`${ hash === '#Testimonial' ? 'navbar-active' : ''}`} href="#Testimonial">Testimonial</Nav.Link>
                            <Nav.Link className={`${ hash === '#Pricing' ? 'navbar-active' : ''}`} href="#Pricing">Pricing</Nav.Link>
                            <Nav.Link className={`${ hash === '#Blog' ? 'navbar-active' : ''}`} href="#Blog">Blog</Nav.Link>
                            <Nav.Link className={`${ hash === '#Contact' ? 'navbar-active' : ''}`} href="#Contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default HeaderNav;