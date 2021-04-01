import React, { useEffect, useState } from 'react'
import { TextInput, TouchableOpacity, View, Text } from "react-native"
import { movieReview } from '../../../styles';
import { makePrivateRequest } from '../../../utils/request';
import { Movie } from '../../../utils/types';

type Props={
    movie: Movie;
}

const MovieReview: React.FC<Props> = ({movie}:Props) => {
    return (
        <View style={movieReview.main}>
           <TextInput 
                style={movieReview.input}
                multiline
                placeholder="Deixe sua avaliação aqui"
           />

           <TouchableOpacity 
                style={movieReview.btn}
           >
               <Text style={movieReview.btnText}>
                    SALVAR AVALIAÇÃO
               </Text>
           </TouchableOpacity>

           
        </View>
    )
}

export default MovieReview;