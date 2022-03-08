import React from 'react';
import SectionHead from '../SectionHead/SectionHead';
import './OurTeam.css'
import TeamCard from './TeamCard/TeamCard';


const teamData = [
    {
        id: 1,
        name: 'Jahid',
        image: 'https://i.ibb.co/6Xw0nqh/team1.jpg',
        title: 'Web Developer',
    },
    {
        id: 2,
        name: 'Nasir',
        image: 'https://i.ibb.co/DrZygC1/team2.jpg',
        title: 'Web Developer'
    },
    {
        id: 3,
        name: 'Rasel',
        image: 'https://i.ibb.co/QXYqbc4/team3.jpg',
        title: 'Web Designer'
    },
    {
        id: 4,
        name: 'Monir',
        image: 'https://i.ibb.co/tMvmJ9z/team4.jpg',
        title: 'Web Designer'
    },
]

const OurTeam = () => {
    return (
        <section id='Team' className='our-team-section'>
            <div className='container'>
                <SectionHead title={"Meet Our Team"}/>
                
                <div className='team-card-area'>
                    <div className='row'>
                        {teamData.map((item, i) => <TeamCard key={i} person={item} />)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurTeam;