import React from "react";
import SplashScreen from "../Screens/SplashScreen";
import AppStack from "./AppStack";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default class AuthStack extends React.Component{
    render(){
        return(
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name='Splash' component={SplashScreen}/>
                <Stack.Screen name="AppStack" component={AppStack}/>
            </Stack.Navigator>
        )
    }
} 