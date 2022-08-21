import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Header({title}){
    const navigation = useNavigation()
    return(
        <View style={{width:"100%" , height:56 , backgroundColor:"#fff"  , alignItems:'center' , flexDirection:"row" , justifyContent:'space-between' , marginBottom:10}}>
            {
                title === "STUDO" ?
                <TouchableOpacity onPress={()=>navigation.openDrawer()}>
            <MaterialIcons name="menu" color="#9088D4" size={31} style={{alignItems:'center' , margin:8 , marginLeft:19}}/>
            </TouchableOpacity> :
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <MaterialIcons name="arrow-back-ios" color="#9088D4" size={31} style={{alignItems:'center' , margin:8 , marginLeft:19}}/>
            </TouchableOpacity>
                }
            <Text style={{color:"#81B2F3" , fontSize:27 , width:"60%" , fontWeight:'500'}}>{title}</Text>
        </View>
    )
}