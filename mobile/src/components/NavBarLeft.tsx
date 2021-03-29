import React from 'react'
import { Image, Text, TouchableOpacity, View } from "react-native"
import { useNavigation, useRoute } from '@react-navigation/core';
import { navBar } from '../styles';
import goBack from '../assets/images/goBack.png'

const NavBarLeft: React.FC = () => {
    
    return ( 
        <View style={navBar.main}>
            
            <TouchableOpacity 
                style={navBar.goBack}
            >
                <Image 
                    source={goBack} 
                    style={navBar.goBackImg}
                />              
            </TouchableOpacity>

            <Text style={navBar.title}>MovieFlix</Text>
            
        </View>
    )
}

export default NavBarLeft;