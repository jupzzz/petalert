import {View, Text, StyleSheet, Image} from 'react-native'

export default function App(){
  return (
    <View style = {StyleSheet.container}>
      <Image source={require('./src/assets/logo.png')}
        style={styles.logo} 
        resizeMode='contain'
      ></Image>

      <Text style= {styles.title}>PetAlerta</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#F3F3FF",
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
    widht: widht,
    height: height,
  }
})