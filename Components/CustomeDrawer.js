import React from "react";

import {
    DrawerContentScrollView,
    DrawerItemList,
  } from '@react-navigation/drawer';
import { Text, View } from "react-native";

export default function CustomeDraswer(props){
    return(
        <View>
        <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'#fff'}}>
        <Text>Welcome</Text>
        <DrawerItemList {...props}/>
        </DrawerContentScrollView>
        </View>
    )
}