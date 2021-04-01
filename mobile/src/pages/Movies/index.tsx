import React, { useEffect, useState } from 'react'
import { Image, ScrollView, BackHandler } from "react-native"
import { movies } from '../../styles';
import MovieCard from './MovieCard';
import MovieFilter from './MovieFilter';
import { Genre, MoviesResponse } from '../../utils/types';
import { makePrivateRequest } from '../../utils/request';
const Movies: React.FC = () => {
    const [idGenre, setIdGenre] = useState(0);
    const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();

    useEffect(() => {
        const params = {
            linesPerPage: 1000,
            genreId: idGenre,
        }
        makePrivateRequest({ url: '/movies', params })
            .then(response => setMoviesResponse(response.data))
            .finally(() => {

            })
    }, [idGenre])

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => true)
        return () =>
        BackHandler.removeEventListener('hardwareBackPress', () => true)
    }, [])

   
    return (
        <ScrollView style={movies.main}>
            <MovieFilter
                setIdGenre={setIdGenre}
            />

            {
                moviesResponse?.content.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))
            }
        </ScrollView>
    )
}

export default Movies