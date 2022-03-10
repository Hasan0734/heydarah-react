import React from 'react';
import Slider from "react-slick";
import SectionHead from '../SectionHead/SectionHead';
import './LatestPost.css'
import PostCard from './PostCard/PostCard';
import postData from './postData'
const LatestPost = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        useTransform: true,
        speed: 1000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]

    };
    return (
        <section id='Blog' className='latest-post-section'>
            <div className='container'>
                <SectionHead title={"Latest Posts"} />
                <div className='post-card'>
                   
                        <Slider {...settings}>
                            {postData.map((post, i) => <PostCard key={i} post={post}/>)}
                        </Slider>
                   
                </div>
            </div>
        </section>
    );
};

export default LatestPost;