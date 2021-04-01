import React, { useEffect, useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { movieDetails } from '../../../styles';
import { makePrivateRequest } from '../../../utils/request';
import { Movie } from '../../../utils/types';
import MovieDetailsInfo from '../MovieDetailsInfo';
import MovieReview from '../MovieReview';

const MovieDetails = ({ route: { params: { id } } }) => {
    const [movie, setMovie] = useState<Movie>();
    useEffect(() => {
        makePrivateRequest({ url: `/movies/${id}` })
            .then(response => setMovie(response.data))
            .finally(() => {

            })
    }, []);

    return (
        <ScrollView style={movieDetails.main}>
            
            {movie && 
                    <>
                        <MovieDetailsInfo movie={movie} />
                        <MovieReview movie={movie} />
                    </>
                    
            }
            {/* {movie && 
                    <MovieReview movie={movie} />
            } */}
            






        </ScrollView>
    )
}

export default MovieDetails;