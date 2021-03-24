import { useEffect, useState } from 'react';
import { MoviesResponse } from '../../core/types/Movie';
import { makePrivateRequest } from '../../core/utils/request';
import MovieCard from './Components/MovieCard'

import './styles.scss'

const Movies = () =>{
    const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();

    

    useEffect(() =>{
        const params = {
            linesPerPage: 12,
        }
        makePrivateRequest({ url: '/movies', params })
            .then(response => setMoviesResponse(response.data))
            .finally(() => {
                
            })
    },[])

    return (
        <div className="movie-main">
            
            <div className="movie-filter">
                
            </div>

            <div className="movie-list">
                {
                    moviesResponse?.content.map(movie =>(
                        <MovieCard movie={movie} />
                    ))
                }

              
                
            </div>
            
            <div className="movie-list">

            </div>
            






        </div>
    )
}
export default Movies;