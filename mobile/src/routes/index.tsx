import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Text } from 'react-native';
import NavBarLeft from '../components/NavBarLeft';
import NavBarRight from '../components/NavBarRight';
import Home from '../pages/Home';
import { navBar } from '../styles';

const Stack = createStackNavigator();

const HeaderText: React.FC = () => <Text style={navBar.title}>MovieFlix</Text>

const Routes: React.FC = () =>{
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitle:"",
                headerStyle:{
                    backgroundColor: "#FFC700",
                    height:80,      
                  },
                headerLeft: () => <NavBarLeft/>,
                headerRight: () => <NavBarRight/>
            }}
        >   
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}

export default Routes;