import React, { useContext, useEffect } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Header from "../Components/Header";
import { AppContext } from "../Providers/AppProvider";
import Entypo from 'react-native-vector-icons/Entypo';

export default function DoneScreen(){
    const {tasks , deleteTodo} = useContext(AppContext)
    useEffect(()=>{
        console.log("tasks are " , tasks)
    } , [])
    return(
        <View>
            <Header title={"Done"}/>
            <ScrollView>
            {
                tasks.map((item , index) => {
                    return(
                        <View key={index}>
                            {
                                item.complete ?
                                <View style={{height:40, flexDirection:'row' , marginHorizontal:15 , marginVertical:6 , borderColor:"#666" , borderWidth:1 , borderRadius:17 , paddingHorizontal:23 , backgroundColor:"#fff" , justifyContent:'space-between' , alignItems:'center'}}>
                                <Text style={{fontSize:21 , color:"#000" , paddingLeft:10}}>{item.name}</Text>
                                <TouchableOpacity onPress={()=>deleteTodo(item)} style={styles.trushButton}>
                                    <Entypo name="trash" size={18} color="#fff"/>
                                </TouchableOpacity>
                                </View>:
                                null
                            }
                        </View>
                    )
                })
            }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    trushButton : {
        width:30 ,
        height:30 ,
        backgroundColor:'#F29999' ,
        borderRadius:40 ,
        justifyContent:'center' ,
        alignItems:'center' ,
        marginRight:17,
    }
})