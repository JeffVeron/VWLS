import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  useDerivedValue,
} from 'react-native-reanimated';
import {Link} from 'expo-router'


const logo = require("../assets/logo.png")

export default function App() {
  const scale = useSharedValue(1);

  // highlight-start
  const rotate = useDerivedValue(() => {
    return `${scale.value * 2}rad`;
  });
  // highlight-end

  const scaleStyles = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const rotateStyles = useAnimatedStyle(() => ({
    transform: [{ rotate: rotate.value }],
  }));

  React.useEffect(() => {
    scale.value = withRepeat(
      withTiming(scale.value * 2, { duration: 1000 }),
      -1,
      true
    );
  }, []);

  return (
    <View style={styles.container}>
       
       
         <Image 
      source={logo}
      style = {styles.logo}
      resizeMode='contain'
      /> 


      <Link href={'./cordinates'}>
        <View  style  = {styles.playViewBox}>
     <Animated.View style={[styles.ball, scaleStyles]} /> 
     <Animated.View style={[styles.box,  scaleStyles]} /> 
     <Text style = {styles.playText}>Play</Text>
        </View>
      </Link>

      <Text style = {styles.howToPlay}>Add the missing Vowels to complete the Word or 
        phrase before the time runs out
      </Text> 

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor:'green'
  },
  

  ball: {
    marginTop:150,
    marginLeft:150,
    height: 60,
    width: 60,
    backgroundColor: 'yellow',  
    borderRadius: 50,
    position: 'relative',
  },
  box: {
    margin:150,
    marginLeft:160,
    position: 'absolute',
    top: 10,  
    left: 2,  
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: 20,
    borderBottomWidth: 20,
    borderLeftWidth: 20,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'blue',  
    borderLeftColor: 'transparent',
  },
  playText:{
    color:'orange',
    fontSize:25,
    fontWeight:'bold',
    marginLeft:160,
    marginTop:-50
  },
  playViewBox:{
  //  marginTop:'20%',
    height: '20%',
    width:'20%'
  },
  logo:{ 
    height:90,
    width:'95%',
    marginTop:20,
    alignItems:'center',
    alignSelf:'center',
    marginRight:15,
    padding:10
},

howToPlay: {
  color: 'white',
    marginTop:50,
    fontSize: 30,
    fontWeight:'bold',
    width:'90%',
    textAlign: 'center',
    padding: 20,
    backgroundColor: "#662549", // Background color for the text
    borderRadius: 10,  
    borderWidth: 2, // Border width
    borderColor: "#F39F5A", // Border color
    shadowColor: '#00ff00',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4, // Adjust the opacity of the shadow
    shadowRadius: 10, // Adjust the size of the shadow
    elevation: 10, // Android only - controls the elevation of the shadow
  },
  
  
  
  
});
