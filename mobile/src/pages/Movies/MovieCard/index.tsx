import React, { useEffect } from 'react'
import { Image, Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from '@react-navigation/native';
import { movieCard } from '../../../styles';
import Movie from '../../../assets/images/movie.png'
const MovieCard: React.FC = () => {
    const navigation = useNavigation();
    return (
        <View style={movieCard.main}>
            <Image
                style={movieCard.image}
                source={Movie}
            />
            <View style={movieCard.info}>
                <Text style={movieCard.title}>
                    O Retorno do Rei
                </Text>
                <Text style={movieCard.year}>
                    2003
                </Text>
                <Text style={movieCard.subTitle}>
                    O olho do inimigo está se movendo.
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