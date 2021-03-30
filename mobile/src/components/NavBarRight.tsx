import React, { useEffect, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from "react-native"
import { useNavigation, useRoute } from '@react-navigation/core';
import { navBar } from '../styles';
import goBack from '../assets/images/goBack.png'
import { isAuthenticated, doLogout } from '../utils/auth';

const NavBarRight: React.FC = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [authenticated, setAuthenticated ] = useState(false)


    async function logged() {
        const result = await isAuthenticated();
        result ? setAuthenticated(true) :setAuthenticated(false);
    }
    function logout(){
        doLogout();
        navigation.navigate("Login")
    }
    useEffect(() =>{
        logged();
    },[])


    return (

        <View>
            {authenticated ? (
                <TouchableOpacity
                    style={navBar.logoutBtn}
                    onPress={logout}
                >
                    <Text
                        style={navBar.logoutText}
                    >
                        SAIR
                </Text> 
                </TouchableOpacity>
            ) : null}

        </View>
    )
}

export default NavBarRight;