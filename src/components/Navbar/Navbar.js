import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Logo from '../../assets/logo.png'
import './Navbar.css'
import { useLocation } from 'react-router-dom';

const navItem = [
    {
        id: '#Home',
        name: 'Home'
    },
    {
        id: '#About',
        name: 'About'
    },
    {
        id: '#Services',
        name: 'Services'
    },
    {
        id: '#Work',
        name: 'Work'
    },
    {
        id: '#Team',
        name: 'Team'
    },
    {
        id: '#Testimonial',
        name: 'Testimonial'
    },
    {
        id: '#Pricing',
        name: 'Pricing'
    },
    {
        id: '#Blog',
        name: 'Blog'
    },
    {
        id: '#Contact',
        name: 'Contact'
    },
]
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
                            {navItem.map((item, i) =>  <Nav.Link key={i} className={`${ hash === item.id ? 'navbar-active' : ''}`} href={item.id}>{item.name}</Nav.Link>)}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default HeaderNav;