import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './Navigation/AuthStack';
import { AppProvider } from './Providers/AppProvider';
export default function App(){
  return (
    <AppProvider>
    <NavigationContainer>
      <AuthStack/>
    </NavigationContainer>
    </AppProvider>
  );
};




