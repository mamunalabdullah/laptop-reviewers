import React from 'react';

const Home = () => {
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
            
        </div>
    );
};

export default Home;