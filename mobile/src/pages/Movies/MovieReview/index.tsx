import React, { useEffect, useState } from 'react'
import { TextInput, TouchableOpacity, View, Text } from "react-native"
import { movieReview } from '../../../styles';
import { makePrivateRequest } from '../../../utils/request';
import { Movie } from '../../../utils/types';

type Props={
    movie: Movie;
    setReview: Function;
}

const MovieReview: React.FC<Props> = ({movie,setReview}:Props) => {

    const [text,setText] =useState("");

    const onSubmit = () => {
        const payload ={
            text: text,
            movieId: movie.id
        }
        makePrivateRequest({
            url: `/reviews/`,
            method: 'POST',
            data: payload
        })
            .then((response) => {
                setReview(response.data)
            })
            .catch(e => {
                          
            })
    }


    return (
        <View style={movieReview.main}>
           <TextInput 
                style={movieReview.input}
                multiline
                value={text}
                placeholder="Deixe sua avaliação aqui"
                onChangeText={(e) => setText(e)}
           />

           <TouchableOpacity 
                style={movieReview.btn}
                onPress={onSubmit}
           >
               <Text style={movieReview.btnText}>
                    SALVAR AVALIAÇÃO
               </Text>
           </TouchableOpacity>

           
        </View>
    )
}

export default MovieReview;