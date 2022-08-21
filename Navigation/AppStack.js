import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../Screens/HomeScreen';
import DoneScreen from '../Screens/DoneScreen';
import CalenderScreen from "../Screens/CalenderScreen"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import ShoppingListScreen from '../Screens/ShoppingListScreen';
// import DailyTaskScreen from '../Screens/DailyTaskScreen';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
// const HomeStack = () => {
//   return(
//     <Stack.Navigator screenOptions={{headerShown: false}}>
//       <Stack.Screen name='Home' component={HomeScreen}/>
//       <Stack.Screen name='Shopping' component={ShoppingListScreen}/>
//       <Stack.Screen name='Daily' component={DailyTaskScreen}/>
//     </Stack.Navigator>
//   )
// }
export default class AppStack extends React.Component {
  render() {
    return (
      <Drawer.Navigator screenOptions={{headerShown: false}}>
        <Drawer.Screen options={{drawerIcon : () => <MaterialIcons name='home' size={23} color="#9088D4"/>}} name="Home" component={HomeScreen} />
        <Drawer.Screen options={{drawerIcon : () => <MaterialIcons name='done-outline' size={23} color="#F6C192"/>}} name="Done" component={DoneScreen} />
        <Drawer.Screen options={{drawerIcon : () => <MaterialIcons name='calendar-today' size={23} color='#81B2F3'/>}} name="Calender" component={CalenderScreen}/>
      </Drawer.Navigator>
    );
  }
}
