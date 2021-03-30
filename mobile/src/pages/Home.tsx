import React from 'react'
import { Image, Text, TouchableOpacity, View } from "react-native"
import { home } from '../styles';
import HomeImg from '../assets/images/home.png'
import arrow from '../assets/images/arrow.png';
const Home: React.FC = () => {
    
    return (
        <View style={home.main}>
            <Image style={home.image} source={HomeImg} />
            
            <Text style={home.title}>
                Avalie filmes
            </Text>
            
            <Text style={home.subTitle}>
                Diga o que você achou do seu filme favorito
            </Text>

            <TouchableOpacity
                                style={home.loginButton}
                                activeOpacity={0.8}
                                // onPress={() => navigation.navigate('Catalog')}
                                >
                    <View style={home.loginTextContent}>
                        <Text style={home.loginText}>FAZER LOGIN</Text>
                    </View>
                    

                    <View style={home.arrowContainer}>
                        <Image source={arrow} /> 
                    </View>
            </TouchableOpacity>
        </View>
    )
}

export default Home