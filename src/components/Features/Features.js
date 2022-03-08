import React, { useState } from 'react';
import SectionHead from './../SectionHead/SectionHead';
import Category from './Category/Category';
import CategoryDesc from './CategoryDescription/CategoryDesc';
import './Features.css'

const featuresData = [
    {
        id: 1,
        title: 'Internet Communication',
        subTitle: 'sub title here',
        icon: '<i className="fa-solid fa-desktop"></i>',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book .",
        image: 'https://i.ibb.co/VLzsQnv/tab01.png',
        type: 'internet'

    },
    {
        id: 2,
        title: 'Branding and development',
        subTitle: 'sub title here',
        icon: '<i className="fa-solid fa-pencil"></i>',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book .",
        image: 'https://i.ibb.co/CnsP5pr/tab02.png',
        type: 'branding'


    },
    {
        id: 3,
        title: 'Motion Graphics',
        subTitle: 'sub title here',
        icon: '<i className="fa-solid fa-shuttle-space"></i>',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book .",
        image: 'https://i.ibb.co/hDk70Nn/tab03.png',
        type: 'graphics'


    },
    {
        id: 4,
        title: 'Mobile Application',
        subTitle: 'sub title here',
        icon: '<i className="fa-solid fa-car"></i>',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book .",
        image: 'https://i.ibb.co/TrQzsFw/tab04.png',
        type: 'mobile'


    },
    {
        id: 3,
        title: 'Relaible company analysis',
        subTitle: 'sub title here',
        icon: '<i className="fa-solid fa-building-columns"></i>',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book .",
        image: 'https://i.ibb.co/ypZr3Bv/tab05.png',
        type: 'analysis'

    },
]
const Features = () => {
    const [detail, setDetail] = useState(featuresData[0])
    return (
        <section id='Features' className='feature-section'>
            <div className='container'>
                <SectionHead title={"Features"} />

                <div className='feature-card-area'>
                    <div className='row'>
                        {/* features */}

                        <div className='col-md-12 col-lg-5 p-0'>
                            <div className='me-5 card-shodow'>
                                {featuresData.map((item, i) => <Category setDetail={setDetail} feature={item} key={i} />)}
                            </div>
                        </div>
                        <div className='col-md-12 col-lg-7'>
                            <CategoryDesc  detail={detail}/>  
                        </div>
                        {/* features desctiption */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;