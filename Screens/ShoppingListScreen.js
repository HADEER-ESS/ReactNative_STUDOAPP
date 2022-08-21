import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AddButton from '../Components/AddButton';
export default function ShoppingListScreen() {
  return (
    <View style={{marginHorizontal: 23, flex: 1, flexWrap: 'wrap' , flexDirection:'row'}}>
        <View
        style={{
          width: '46%',
          height: 80,
          borderRadius: 17,
          backgroundColor: '#81B2F3',
          margin:7
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            flex: 1,
            alignItems: 'center',
          }}>
          <Text style={{color: '#fff', fontSize: 23, fontWeight: 'bold'}}>
            Paper
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: 'red',
              width: 30,
              height: 30,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Entypo name="trash" color="#fff" size={19} />
          </TouchableOpacity>
        </View>
      </View>
      <AddButton inputText={"add shop item"}/>
    </View>
  );
}
