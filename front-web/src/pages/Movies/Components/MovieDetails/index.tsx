import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Movie } from '../../../../core/types/Movie';
import { makePrivateRequest } from '../../../../core/utils/request';
import MoviewDetailsInfo from '../MovieDetailsInfo';
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
        </div >

    )
}
export default MoviewDetails;