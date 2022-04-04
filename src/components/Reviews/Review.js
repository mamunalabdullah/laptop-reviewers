import React from 'react';

const Review = (props) => {
    const {image, name, speech, rating} = props.review;
    return (
        <div >
            <div className="shadow-lg rounded-2xl w-80 h-100 flex flex-col bg-white p-4 border-4 mt-10">
        <img
          className="mx-auto object-center rounded-xl h-60 w-80 mb-3"
          src={image}
          alt=""
        />
        <p className=" justify-center">
          <span className="font-semibold">Name: </span>
          {name}
        </p>
        <div className=" justify-between flex items-center gap-1">
          <div>
            <span className="font-semibold">Talks: </span>
            {speech}
          </div>
        </div>
        <p>
          Rating: <span className=" font-bold">{rating}</span> star
        </p>
      </div>
        </div>
    );
};

export default Review;