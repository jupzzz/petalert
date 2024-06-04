import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native'

export default function App(){
  return (
    <View style = {StyleSheet.container}>
      <Image source={require('./src/assets/logo.png')}
        style={styles.logo} 
        resizeMode='center'
      ></Image>

      <Text style= {styles.title}>PetAlerta</Text>
    </View>
  )
}
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#F3F3FF",
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
    width: width * 0.8,
    height: height * 0.4,
  }
})