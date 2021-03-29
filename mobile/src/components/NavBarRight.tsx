import React from 'react'
import { Image, Text, TouchableOpacity, View } from "react-native"
import { useNavigation, useRoute } from '@react-navigation/core';
import { navBar } from '../styles';
import goBack from '../assets/images/goBack.png'

const NavBarRight: React.FC = () => {
    
    return ( 
        <TouchableOpacity
            style={navBar.logoutBtn}
        >
            <Text
                style={navBar.logoutText}
            >
                SAIR
            </Text>
        </TouchableOpacity>
    )
}

export default NavBarRight;