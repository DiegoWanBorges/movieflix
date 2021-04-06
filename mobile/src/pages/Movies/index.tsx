import React, { useEffect, useState } from 'react'
import { ScrollView, BackHandler, ActivityIndicator } from "react-native"
import { movies } from '../../styles';
import MovieCard from './MovieCard';
import MovieFilter from './MovieFilter';
import { MoviesResponse } from '../../utils/types';
import { makePrivateRequest } from '../../utils/request';


const Movies: React.FC = () => {
    const [idGenre, setIdGenre] = useState(0);
    const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        const params = {
            linesPerPage: 1000,
            genreId: idGenre,
        }
        makePrivateRequest({ url: '/movies', params })
            .then(response => setMoviesResponse(response.data))
            .finally(() => {
                setIsLoading(false)
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
            {isLoading ?
                (<ActivityIndicator size="large" color="#FFC700" />)
                :
                (
                    moviesResponse?.content.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                )}
        </ScrollView>
    )
}
export default Movies