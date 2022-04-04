import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Review from '../Reviews/Review';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("reviews.json")
        .then(res => res.json())
        .then(data => setReviews(data));
    },[]);
    return (
        <div>
            <div className="asus flex justify-around px-8 items-center">
                <div className="laptop-content px-8">
                    <div className="headings text-6xl font-bold">
                        <h3 className='text-blue-900'>Your Next Laptop is</h3>
                        <h4 className='text-purple-900'>Asus Notebook X555LF</h4>
                    </div>
                    <div className="details text-justify px-24 my-4">
                        <p>Asus X555Lf is the latest model of Asus Brand. It has 15.6" display, 1TB hard disk, 8GB Ram, 250GB dedicated SSD with 4 hours backcup. It is the budget laptop for highly working and gaming performence...</p>
                    </div>
                    <button className='rounded-full bg-zinc-600 p-4 text-white font-bold'>Live Demo</button>
                </div>
                <div className="laptop-img">
                    <img src="https://media.istockphoto.com/photos/modern-computerlaptop-with-blank-screen-on-counter-barand-window-view-picture-id1157789866?k=20&m=1157789866&s=612x612&w=0&h=1txTQ36VQ8Wc4N2AwrLwMQ9Llb9mleL8FVzQj_apU3E=" alt="laptop"/>
                </div>
            </div>
            <div>
                <h1 className='my-20 text-center text-4xl font-semibold'>Customer Review({reviews.slice(0, 3).length})</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-20">
                    {reviews.slice(0, 3).map((review) => (
                        <Review key={review.id} review={review} />
                    ))}
                </div>
                <div className=" items-center justify-center flex my-10">
                    <button className='rounded-full bg-zinc-600 p-4 text-white font-bold'><Link to="/review" >See All Review</Link></button>
                    
                </div>
            </div> 
        </div>
            
    );
};

export default Home;