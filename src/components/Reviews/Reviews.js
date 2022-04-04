
import Review from './Review';
import { ReviewHook } from "../Hooks/ReviewHook";

const Reviews = () => {
    const [reviews] = ReviewHook([]);
    
    return (
        <div className='grid grid-cols-3 justify-center gap-4 ml-20 mb-20'>
            
            {
                 reviews.map( review => <Review key={review.id} review={review}></Review>
            )
            }
            
        </div>
    );
};

export default Reviews;