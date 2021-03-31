import React, { useEffect } from 'react'
import { Image, Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from '@react-navigation/native';
import { movieCard } from '../../../styles';
import MovieImg from '../../../assets/images/movie.png'
import { Movie} from '../../../utils/types';

type Props={
    movie:Movie;
}

const MovieCard: React.FC<Props> = ({movie}:Props) => {
    const navigation = useNavigation();
    return (
        <View style={movieCard.main}>
            <Image
                style={movieCard.image}
                source={{uri:movie.imgUrl}}
            />
            <View style={movieCard.info}>
                <Text style={movieCard.title}>
                    {movie.title}
                </Text>
                <Text style={movieCard.year}>
                    {movie.year}
                </Text>
                <Text style={movieCard.subTitle}>
                    {movie.subTitle}
                </Text>
                <TouchableOpacity style={movieCard.btnDetails}>
                    <Text style={movieCard.btnText}>
                        VER DETALHES
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default MovieCard