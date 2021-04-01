import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import NavBarLeft from '../components/NavBarLeft';
import NavBarRight from '../components/NavBarRight';
import { Home,Login,Movies,MovieDetails } from '../pages';


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
            <Stack.Screen name="MovieDetails" component={MovieDetails} />


        </Stack.Navigator>
    )
}

export default Routes;