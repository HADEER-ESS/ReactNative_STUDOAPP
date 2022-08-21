import React from 'react';
import {Image, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const done = ({...props}) => {
  return(
  <TouchableWithoutFeedback color="#B2A4FF" {...props}>
    <Text style={{marginRight:17 , color:"#FFF" , fontSize:17}}>Done</Text>
  </TouchableWithoutFeedback>
  )
}
export default class SplashScreen extends React.Component {
  render() {
    return (
        <Onboarding
        onSkip={()=>this.props.navigation.replace("AppStack")}
        onDone={()=>this.props.navigation.replace("AppStack")}
        DoneButtonComponent={done}
        pages={[
          {
            backgroundColor: '#8F71FF',
            image: <Image source={require('../Assets/splash1.png')} />,
            title: <Text style={styles.TestStyle}>Save time and be productive by creating daily task</Text>,
            subtitle:''
          },
          {
            backgroundColor: '#82ACFF',
            image: <Image source={require('../Assets/splash2.png')} />,
            title: <Text style={styles.TestStyle}>Get the satisfying feeling when marking them done</Text>,
            subtitle:''
          },
          {
            backgroundColor: '#B2A4FF',
            image: <Image source={require('../Assets/splash3.png')} />,
            title: <Text style={styles.TestStyle}>Reach your goals faster with DoneX</Text>,
            subtitle:''
          },
        ]}
      />
    );
  }
}
const styles = StyleSheet.create({
    TestStyle : {
        fontSize:27,
        fontWeight:"bold",
        textAlign:"center",
        color:"#fff",
        paddingHorizontal:23
    }
})