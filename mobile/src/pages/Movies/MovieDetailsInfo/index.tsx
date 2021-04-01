import React, { useEffect, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from "react-native"
import { movieDetailsInfo } from '../../../styles';
import { makePrivateRequest } from '../../../utils/request';
import { Movie } from '../../../utils/types';

type Props={
    movie: Movie;
}

const MovieDetailsInfo: React.FC<Props> = ({movie}:Props) => {
    

    return (
        <View style={movieDetailsInfo.main}>
            <Text style={movieDetailsInfo.title} >{movie.title}</Text>
            <Image style={movieDetailsInfo.image} source={{uri:movie.imgUrl}} />
            <Text style={movieDetailsInfo.year} >{movie.year}</Text>
            <Text style={movieDetailsInfo.subTitle} >{movie.subTitle}</Text>
            <Text style={movieDetailsInfo.sinopse} >Sinopse</Text>
            <View style={movieDetailsInfo.sinopseContent}>
                <Text 
                    style={movieDetailsInfo.sinopseText} 
                > 
                    {movie.synopsis} 
                </Text>
            </View>
        </View>
    )
}

export default MovieDetailsInfo;