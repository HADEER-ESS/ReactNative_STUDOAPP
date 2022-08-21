import React, { useContext, useState } from "react";
import { Button, Keyboard, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AppContext } from "../Providers/AppProvider";


export default function AddButton({inputText}){
    const {input , setInput , addToTask} = useContext(AppContext)
    const [appear , setApprear] = useState(false)

    const handleModal = () => {
        Keyboard.dismiss()
        addToTask(input)
        setInput(null)
        setApprear(false)
        }
    return(
        <View style={{position:'absolute' , bottom:0 , right:0 ,  margin:19}}>
            <TouchableOpacity style={styles.ButtonStyle} onPress={()=>setApprear(true)}>
                <MaterialIcons name="add" size={30} color="#fff"/>
            </TouchableOpacity>
            <Modal transparent={true} visible={appear}>
                <View style={{ flex:1 , backgroundColor:"#000000aa" }}>
                    <View style={{backgroundColor:"#fff" ,margin:30 , justifyContent:'center' , height:180 , borderRadius:13 , position:'absolute' , bottom:0 , width:"86%" }}>
                        <TextInput placeholder={inputText} value={input} onChangeText={(value)=>setInput(value)} style={{borderWidth:1 , borderRadius:11 , borderColor:"#666" , marginBottom:17 , height:40 , marginHorizontal:10 , paddingStart:13}}/>
                        <View style={{justifyContent:"center" ,alignItems:'center'}}>
                            <Button title="Add" onPress={()=>handleModal()}/>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    ButtonStyle : {
        width:50 ,
        height:50 ,
        backgroundColor:'#81B2F3' ,
        borderRadius:50 ,
        justifyContent:'center' ,
        alignItems:'center'
    },
})