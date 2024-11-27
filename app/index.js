import React,{ useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity ,Button } from 'react-native'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  useDerivedValue,
} from 'react-native-reanimated';
import {Link, useNavigation } from 'expo-router'
import { Audio} from 'expo-av';

const logo = require("../assets/logo.png")

//const  soundObject  = await Audio.Sound.createAsync();

//const  soundObject  = await Audio.Sound();

const sound = new Audio.Sound();

export default function App() {
  const scale = useSharedValue(1);
  const navigation = useNavigation()

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
/* 
  //const [sound, setSound] = useState();

  async function playSound() {
    console.log('Loading Sound');
  
    await soundObject.loadAsync(require('../assets/sounds/mixkit-game-show-fun-suspense-942.wav'))
    setSound(sound);

   // console.log('Playing Sound');
    await soundObject.playAsync();
  }


  useEffect(() => {
    return soundObject
      ? () => {
          //console.log('Unloading Sound');
          soundObject.unloadAsync();
        }
      : undefined;
  }, [soundOject]);

   useEffect(()=>{
      playSound()
   },[]) */

/*    

const [soundObject, setSoundObject] = useState(null);
   


   useEffect(() => {
    const loadSound = async () => {
     
      try {
        await  soundObject.loadAsync(require('../assets/sounds/mixkit-game-show-fun-suspense-942.wav'));
        await sound.loadAsync(require('../assets/sounds/mixkit-game-show-fun-suspense-942.wav'));
      
        setSoundObject(sound);
        await soundObject.playAsync();
        sound.playAsync()
      } catch (error) {
        console.error('Error loading sound:', error);
      }
    };

    loadSound();
    return () => {
      soundObject && soundObject.unloadAsync();
    };
  }, []);
 

  async function stopSound(){
    await soundObject.stopAsync()
  } 
  
  */
 


  
  return (
    <View style={styles.container}>
    
       
       
         <Image 
      source={logo}
      style = {styles.logo}
      resizeMode='contain'
      /> 


      <Link href= {'/levels'}  /*  onPress = {stopSound} */  >
        <View   style  = {styles.playViewBox}>
     <Animated.View  style={[styles.ball, scaleStyles]}   /> 
     <Animated.View style={[styles.box,  scaleStyles]}  /> 
     <Text style = {styles.playText}>Play</Text>
        </View>
      </Link>

 

    {/*   <Button  onPress = {stopSound} title = 'Stop' />  */}

      <Text style = {styles.howToPlay}>Add the missing Vowels to complete the Word or 
        phrase before the time runs out
      </Text> 

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems:'center',
    backgroundColor: '#864AF9' , /*  '#1D2B53', */
    //height:'100%',
    //justifyContent:'space-between'
  },
  

  ball: {
   // marginTop:150,
  //  marginLeft:150,
    height: 60,
    width: 60,
    backgroundColor: "#662549",  
    borderRadius: 50,
    position: 'relative',
  },
  box: {
   // margin:150,
    marginLeft:6,
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
    borderBottomColor: 'white',  
    borderLeftColor: 'transparent',
  },
  playText:{
    color:'orange',
    fontSize:20,
    fontWeight:'bold',
    marginLeft:15,
    marginTop:-50
  },
  playViewBox:{
//  marginLeft:-50,
//  marginRight:100,
marginTop:700,
marginBottom:30,
    height: '20%',
    width:'20%',
    alignContent:'center',
    justifyContent:'center'
  },
  logo:{ 
    height:90,
    width:'95%',
    marginTop:20,
    alignItems:'center',
    alignSelf:'center',
    marginRight:15,
    padding:10,
    marginBottom:100
},

howToPlay: {
  color: 'white',
    marginTop:60,
    fontSize: 25,
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
