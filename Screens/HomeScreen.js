import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../Components/Header";
import Search from "../Components/search";
export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1 , backgroundColor:'#fff'}}>
            <Header title={"STUDO"}/>
            <Search/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    textStyle : {
        color:'#fff' ,
        fontSize:19 ,
        fontWeight:'bold',
        paddingTop:16,
        marginBottom:13
    },
    IconStyle: {
        backgroundColor:"#FFF" ,
        width:50 ,
        height: 50 ,
        borderRadius:50 ,
        justifyContent:'center' ,
        alignItems:'center',
        marginTop:13,
    },
    CardStyle1 : {
        backgroundColor:"#F6C192",
        borderRadius:15 ,
        justifyContent:'center' ,
        alignItems:'center',
        marginBottom:30
    },
    // CardStyle2 : {
    //     //width:180 ,
    //     //height: 180 ,
    //     backgroundColor: "#81B2F3" ,
    //     borderRadius:15 ,
    //     justifyContent:'center' ,
    //     alignItems:'center',
    //     marginBottom:15
    // },
    CardStyle3 : {
        backgroundColor: "#F29999" ,
        borderRadius:15 ,
        justifyContent:'center' ,
        alignItems:'center',
    },
    // CardStyle4 : {
    //     width:180 ,
    //     height: 180 ,
    //     backgroundColor: "#fff" ,
    //     borderRadius:15 ,
    //     justifyContent:'center' ,
    //     alignItems:'center',
    //     borderColor:"#9088D4",
    //     borderWidth:4,
    // }
})