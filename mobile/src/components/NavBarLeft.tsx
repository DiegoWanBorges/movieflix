import React, { useEffect } from 'react'
import { Image, Text, TouchableOpacity, View } from "react-native"
import { useNavigation, useRoute } from '@react-navigation/core';
import { navBar } from '../styles';
import goBack from '../assets/images/goBack.png'

const NavBarLeft: React.FC = () => {
    const navigation = useNavigation();
    const route = useRoute();

    useEffect(() =>{
        console.log(route.name)
    },[])

    function canGoBack(){
        const routes =["Home","Movies"];
       return !routes.includes(route.name)
    }
    return (
        <View style={navBar.main}>

            {canGoBack()  ? (
                <TouchableOpacity
                style={navBar.goBack}
                onPress={() => navigation.goBack()}
            >
                <Image
                    source={goBack}
                    style={navBar.goBackImg}
                />
            </TouchableOpacity>    
            ) : null

            }
            <Text style={navBar.title}>MovieFlix</Text>

        </View>
    )
}

export default NavBarLeft; 