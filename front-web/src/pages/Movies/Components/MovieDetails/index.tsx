import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Movie } from '../../../../core/types/Movie';
import { isAllowedByRole } from '../../../../core/utils/auth';
import { makePrivateRequest } from '../../../../core/utils/request';
import MoviewDetailsInfo from '../MovieDetailsInfo';
import MovieReviewCard from '../MovieReviewCard';
import MovieReviewList from '../MovieReviewList'
import './styles.scss'

type ParamsType = {
    movieId: string;
}
const MoviewDetails = () => {
    const { movieId } = useParams<ParamsType>();
    const [movie, setMovie] = useState<Movie>();

    useEffect(() => {
        makePrivateRequest({ url: `/movies/${movieId}` })
            .then(response => {
                setMovie(response.data)
            })
            .finally(() => {

            })
    }, [movieId])

    return (
        <div className="movie-details-main">
            <MoviewDetailsInfo movie={movie} />

            {isAllowedByRole(["ROLE_MEMBER"]) ?
                (
                    <MovieReviewCard
                        movieId={movie?.id}

                    />
                ) : null
            }

            <div className="movie-details-list">
                {
                    movie?.reviews.map(review => (
                        <MovieReviewList review={review} />
                    )).sort((a, b) => 1 - 2)
                }

            </div>
        </div >

    )
}
export default MoviewDetails;