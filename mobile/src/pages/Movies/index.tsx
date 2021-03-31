import React, { useEffect } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from '@react-navigation/native';
import { movies } from '../../styles';
import MovieCard from './MovieCard';
const Movies: React.FC = () => {
    const navigation = useNavigation();
    
    return (
        <ScrollView style={movies.main}>
           <MovieCard/>
           <MovieCard/>
           <MovieCard/>
           <MovieCard/>
        </ScrollView>
    )
}

export default Movies