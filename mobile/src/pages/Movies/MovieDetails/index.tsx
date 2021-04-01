import React, { useEffect, useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { movieDetails, movieReviewList } from '../../../styles';
import { isAllowedByRole } from '../../../utils/auth';
import { makePrivateRequest } from '../../../utils/request';
import { Movie, Review } from '../../../utils/types';
import MovieDetailsInfo from '../MovieDetailsInfo';
import MovieReview from '../MovieReview';
import MovieReviewList from '../MovieReviewList';

const MovieDetails = ({ route: { params: { id } } }) => {
    const [movie, setMovie] = useState<Movie>();
    const [canReview, setCanReview] = useState(true);
    const [review, setReview] = useState<Review>();

    async function verifyPermission() {
        setCanReview(await isAllowedByRole(["ROLE_MEMBER"]));
    }

    function getMovie() {
        makePrivateRequest({ url: `/movies/${id}` })
            .then(response => setMovie(response.data))
            .finally(() => {

            })
    }
    useEffect(() => {
        verifyPermission();
        getMovie()
    }, [review]);


    return (
        <ScrollView style={movieDetails.main}>

            {movie &&
                <>
                    <MovieDetailsInfo movie={movie} />

                    {canReview ?
                        (<MovieReview movie={movie} setReview={setReview} />)
                        :
                        (null)
                    }

                    <View style={movieReviewList.main}>

                        {movie.reviews.length > 0 ?
                            <Text style={movieReviewList.title} >Avaliações</Text>
                            :
                            (<Text style={movieReviewList.title} >{canReview ? "Seja o primeiro a avaliar!" : "Filme não possui avaliação!"}</Text>)
                        }



                        {movie.reviews.map(review => (
                            <MovieReviewList key={review.id} review={review} />
                        )).sort((a, b) => 1 - 2)}
                    </View>

                </>

            }







        </ScrollView>
    )
}

export default MovieDetails;