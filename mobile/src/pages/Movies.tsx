import React, { useEffect } from 'react'
import { Image, Text, TouchableOpacity, View } from "react-native"

import { useNavigation } from '@react-navigation/native';
const Movies: React.FC = () => {
    const navigation = useNavigation();
    useEffect(() =>{
        navigation.reset
    },[])
    return (
        <View >
           <Text>Movies</Text>
        </View>
    )
}

export default Movies