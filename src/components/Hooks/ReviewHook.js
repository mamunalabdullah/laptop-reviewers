import { useEffect, useState } from "react"

export const ReviewHook=()=>{
    const[reviews, setReviews] =useState([]);

    useEffect(()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=> setReviews(data))
    },[])

    return [reviews, setReviews];
}