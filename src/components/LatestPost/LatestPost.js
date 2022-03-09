import React from 'react';
import SectionHead from '../SectionHead/SectionHead';
import './LatestPost.css'
const LatestPost = () => {
    return (
        <section id='Blog' className='latest-post-section'>
            <div className='container'>
                <SectionHead title={"Latest Posts"}/>
                <div className='post-card'>
                    <div className='row'>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestPost;