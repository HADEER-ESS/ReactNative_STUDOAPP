import React, { useContext } from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AddButton from '../Components/AddButton';
import { AppContext } from '../Providers/AppProvider';

export default function DailyTaskScreen({data}) {
  const {addtoDone} = useContext(AppContext)
  return (
    <View style={{marginHorizontal: 23, flex: 1}}>
      <ScrollView>
      {data.map((item, index) => {
        return (
          <View key={index}>
            {
              item.complete?
              null :
              <View 
            style={{
              flexDirection: 'row',
              height: 49,
              justifyContent: 'space-between',
              alignItems: 'center',
              borderColor: '#9088D4',
              shadowColor:"red",
              shadowOffset : {width:"100%" , height:"100%"},
              borderWidth: 1,
              marginHorizontal: 15,
              paddingHorizontal: 20,
              marginVertical:7,
              borderRadius:9,
              backgroundColor:'#fff'
            }}>
              <Text style={{color: '#000', fontSize: 21}}>{item.name}</Text>
            <TouchableOpacity onPress={()=>addtoDone(item)} style={styles.doneButton}>
              <MaterialIcons name="done" size={29} color="#fff" />
            </TouchableOpacity>
            </View>
            
            }
            </View> 
        );
      })}
      </ScrollView>
      <AddButton inputText={'add task'} />
    </View>
  );
}
const styles = StyleSheet.create({
  doneButton : {
      width:30 ,
      height:30 ,
      backgroundColor:'#9088D4' ,
      borderRadius:40 ,
      justifyContent:'center' ,
      alignItems:'center' ,
      marginRight:17,
  }
})