import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import { login,home } from '../../styles';
import arrow from '../../assets/images/arrow.png';
import eyesOpened from '../../assets/images/eyes-opened.png'
import eyesClosed from '../../assets/images/eyes-closed.png'
import { useNavigation } from '@react-navigation/native';
import { makeLogin } from '../../utils/request';
import { saveSessionData } from '../../utils/auth';
const Login: React.FC = () => {
    const navigation = useNavigation();
    const [hidePassword, setHidePassword] = useState(false);
    const [loggingIn, setLoggingIn] = useState(false);
    const [userInfo, setUserInfo] = useState(
        {
            username: "",
            password: ""
        }
    )
    async function handleLogin() {
        await makeLogin(userInfo)
             .then(response => {
                 setLoggingIn(true)
                 saveSessionData(response.data.access_token);
                 navigation.navigate("Movies");
                 setLoggingIn(false)
             })
             .catch(response => {
                 console.warn(response)
                 setLoggingIn(false)
             })
     }
    return (
        <View style={login.main}>
            <Text style={login.title}>LOGIN</Text>
            <View style={login.form}>
                <TextInput
                    placeholder="Email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    style={login.input}
                    value={userInfo.username}
                    onChangeText={(e) => {
                        const newUserInfo = { ...userInfo };
                        newUserInfo.username = e;
                        setUserInfo(newUserInfo);
                    }}
                />
                <View style={login.passwordGroup}>
                    <TextInput
                        placeholder="Senha"
                        autoCapitalize="none"
                        style={login.input}
                        value={userInfo.password}
                        onChangeText={(e) => {
                            const newUserInfo = { ...userInfo };
                            newUserInfo.password = e;
                            setUserInfo(newUserInfo);
                        }}
                        secureTextEntry={!hidePassword}
                    />
                    <TouchableOpacity
                        onPress={() => setHidePassword(!hidePassword)}
                        style={login.toggle}
                    >
                        <Image
                            source={hidePassword ? eyesClosed : eyesOpened}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity
                                style={home.loginButton}
                                activeOpacity={0.8}
                                onPress={() => handleLogin()}
                                >
                    <View style={home.loginTextContent}>
                        <Text style={home.loginText}>FAZER LOGIN</Text>
                    </View>
                    

                    <View style={home.arrowContainer}>
                        <Image 
                            source={arrow} 
                            style={home.arrowImage}
                        /> 
                    </View>
            </TouchableOpacity>
        </View>
    )
}

export default Login