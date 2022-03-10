import React from 'react';
import SectionHead from '../SectionHead/SectionHead';
import ContactForm from './ContactForm';
import './Discuss.css'
const Discuss = () => {

    return (
        <section className='discuss-section'>
            <div className='container'>
                <SectionHead title={"Let's Discuss"} />
                <div className='discuss-area'>
                    <div className='row'>
                        <div className='col-sm-3 col-12'>
                            <div className='text-white'>
                                <h3>Contact INFO!</h3>
                                <p>2345 Mansoura Nabaroha, 1234,</p>
                                <p>Washington. United States.</p>
                                <p>(401) 1234 567</p>
                            </div>
                        </div>
                        <div className='col-sm-7 col-12'>
                            <div className='contact-form'>
                                <h3 className='text-white mb-4'>Say hello!</h3>
                                <ContactForm />
                            </div>
                        </div>
                        <div className='col-sm-2 col-12 mt-5 mt-sm-0'>
                            <ul className='list-unstyled discuss-social d-flex d-sm-block gap-4 justify-content-center '>
                                <li><a href=""><i className="fa-brands fa-behance"></i></a></li>
                                <li><a href=""><i className="fa-brands fa-twitter"></i></a></li>
                                <li><a href=""><i className="fa-brands fa-dribbble"></i></a></li>
                                <li><a href=""><i className="fa-brands fa-facebook-f"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Discuss;