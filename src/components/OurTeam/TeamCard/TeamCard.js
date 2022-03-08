import React from 'react';
import './TeamCard.css'
const TeamCard = ({ person }) => {
    return (
        <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
            <div className='card team-card bg-transparent overflow-hidden border-0'>
                <div className='pe-4 position-relative'>
                    <img className='card-img-top ' src={person.image} alt="" />
                    <div className='position-absolute card-plus'>
                        <i className='fa fa-plus'></i>
                    </div>
                    <div className='team-social'>
                        <div className='team-social-icon text-white'>
                            <a href=""> <i className="fa-brands fa-facebook-f"></i></a>
                        </div>
                        <div className='team-social-icon text-white'>
                            <a href=""><i className="fa-brands fa-twitter"></i></a>
                        </div>
                        <div className='team-social-icon text-white'>
                            <a href=""> <i className="fa-brands fa-google-plus-g"></i></a>
                        </div>
                        <div className='team-social-icon text-white'>
                            <a href=""><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className='card-body py-4 team-card-body'>
                    <div className='text-white text-center'>
                        <h5>{person.name}</h5>
                        <h6>{person.title}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;