import './styles.scss'
import {  Review } from 'core/types/Movie';
import { ReactComponent as Star } from 'core/assets/images/star.svg';


type Props ={
    review?: Review;
}

const MovieReviewList = ({ review }:Props) => {
    
    return (
        <div className="movie-review-list-main">
            
            <div className="movie-review-list-info">

                <Star className="movie-review-list-img"/>
                <h3 className="movie-review-list-name">{review?.user.name}</h3>
                
            </div>

            <div className="movie-review-list">
                <h3 className="movie-review-list-text"> {review?.text} </h3>
            </div>
        </div>
    )
}
export default MovieReviewList;