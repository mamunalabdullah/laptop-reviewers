import React, { useEffect, useState } from 'react';
import Review from './Review';
import { ReviewHook } from "../Hooks/ReviewHook";

const Reviews = () => {
    const [reviews] = ReviewHook([]);
    useEffect(() => {
        fetch("reviews.json")
        .then(res => res.json())
        .then(data => setReviews(data));
    },[]);
    return (
        <div className='grid grid-cols-3 justify-center gap-4'>
            
            {
                 reviews.map( review => <Review key={review.id} review={review}></Review>
            )
            }
            
        </div>
    );
};

export default Reviews;