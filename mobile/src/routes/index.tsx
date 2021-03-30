import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Text } from 'react-native';
import NavBarLeft from '../components/NavBarLeft';
import NavBarRight from '../components/NavBarRight';
import Home from '../pages/Home';
import { navBar } from '../styles';
import Login from '../pages/Login';
import Movies from '../pages/Movies';

const Stack = createStackNavigator();

const Routes: React.FC = () =>{
  

    return (
        
        <Stack.Navigator
            screenOptions={{
                headerTitle:"",
                headerStyle:{
                    backgroundColor: "#FFC700",
                    height:80,      
                  },
                headerBackTitle:"teste",
                headerLeft: () => <NavBarLeft/>,
                headerRight: () => <NavBarRight/>
            }}
            
        >   
            
            <Stack.Screen name="Home" component={Home}  />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Movies" component={Movies} />


        </Stack.Navigator>
    )
}

export default Routes;