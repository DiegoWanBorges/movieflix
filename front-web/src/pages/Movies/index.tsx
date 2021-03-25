import { useEffect, useState } from 'react';
import { Genre, MoviesResponse } from '../../core/types/Movie';
import { makePrivateRequest } from '../../core/utils/request';
import MovieCard from './Components/MovieCard'
import MovieFilter from './Components/MovieFilter';

import './styles.scss'

const Movies = () => {
    const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
    const [genre, setGenre] = useState<Genre>();
    const [activePage, setActivePage] = useState(0);
    useEffect(() => {
        const params = {
            linesPerPage: 12,
            genreId: genre?.id
        }
        makePrivateRequest({ url: '/movies', params })
            .then(response => setMoviesResponse(response.data))
            .finally(() => {
            })
    }, [genre])

    const handleChangeGenre = (genre: Genre) => {
        console.log(genre)
        setActivePage(0);
        setGenre(genre);

    }

    return (
        <div className="movie-main">
            
            <MovieFilter
                genre={genre}
                handleChangeGenre={handleChangeGenre}
            />

            <div className="movie-list">
                {
                    moviesResponse?.content.map(movie => (
                        <MovieCard movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}
export default Movies;