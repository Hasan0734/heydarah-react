import React from 'react';
import './PostCard.css';
const PostCard = ({post}) => {
    const {title, text, image, link, date} = post;
    
  
    const firstWord = text.slice(0, 155)
    return (

        <div className='p-3 pb-5'>
            <div className='card card-area border-0 card-shadow rounded-2'>
                <img className='' src={image} alt="" />
                <p className='card-date'>{date.getDate()} | {date.toLocaleString('en-GB', { month: 'short' })}</p>
                <div className='card-body p-4'>

                    <h4 className='title'>{title}</h4>
                    <p className='text'>
                        {firstWord}......
                    </p>
                    <a className='read-more' href={link}>Read More</a>
                </div>
            </div>
        </div>

    );
};

export default PostCard;