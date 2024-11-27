 
import React, { useState, useEffect } from 'react';
import {Canvas, Text  ,Rect ,  Circle,mix, Group, Path ,Skia, 
    useValue,
    runTiming,
    matchFont
    } from "@shopify/react-native-skia";
     import {
        useDerivedValue,
        useSharedValue,
        withRepeat,
        withTiming,
      } from "react-native-reanimated";
      import { View, useWindowDimensions , Button, Platform , StyleSheet, Easing } from 'react-native';
import { useRouter , useNavigation } from 'expo-router';
import useTimerStore from '../timerStore';


const Timer = (props) => {
 const navigation = useNavigation()
 const router = useRouter()
 const { width } = useWindowDimensions(); 
  var levelOfGame =props.levelOfGame
  const nextgame =parseInt(levelOfGame) + 1;
const levelNum = props.levelNum


console.log("+++++> "+ levelOfGame)

const fontFamily = Platform.select({ ios: "Helvetica", default: "serif" });
const fontStyle = {
  fontFamily,
  fontSize: 30,
  fontStyle: "italic",
  fontWeight: "bold",
 
};
const font = matchFont(fontStyle); 
 
const path = Skia.Path.Make()
path.addCircle( 130 ,76, 60)

///animate the 
const circlePercent  = useSharedValue(15)
const end = useSharedValue(0)
const [seconds, setSeconds] = useState(15);


useEffect(()=>{

const interval = setInterval(() => {
end.value = withTiming(circlePercent.value -= 1, {duration:15000}, false)
setSeconds(prevSeconds => prevSeconds - 1);
if (circlePercent.value <= 0) {
clearInterval(interval);
 
navigation.navigate(
  {
    name:"levels/timesUp" ,
    params:{ level:levelOfGame , levelNum: props.levelNum } 
  }
)
}
}, 1000);
return () => clearInterval(interval);
},[circlePercent])

const [secondsC, setSecondsC] = useState(0);
const [textColor, setTextColor] = useState('white'); // Initialize with 'white'

useEffect(() => {
  const intervalId = setInterval(() => {
    setSecondsC(prevSeconds => prevSeconds + 1);
  }, 1000);

  return () => clearInterval(intervalId);
}, []);

useEffect(() => {
  const randomColor = getRandomColor();
  setTextColor(randomColor);
}, [seconds]); // Trigger color change on every render

const getRandomColor = () => {
  // Generate a random hex color code
  return '#' + Math.floor(Math.random()*16777215).toString(16);
};

 

  return (
    <>
    <Canvas
     style={{
  
       minHeight: 147,
       width :250, 
       justifyContent: 'center',
       alignItems: 'center', 
    /*    backgroundColor: 'red',  */
      marginLeft: 60,   
       /* marginTop: 5 */
      }} 
      
       >
     <Group
/*      style = {{
      justifyContent: 'center',
      alignItems: 'center', 
     }} */
     >
     <Path
      path= {path} 
      color = 'white'
      style = {'stroke'}
      strokeWidth={25}
      strokeCap = {'round'}
      start={0}
      end={15}
      />
    <Path
      path= {path} 
      color =  {textColor}
      style = {'stroke'}
      strokeWidth={15}
      strokeJoin={'round'}
      strokeCap = {'round'}
      start={0}
      end={end}
      />   
      <Text
      x={115}
      y = {85}
      text = {`${seconds+1}`}
      color={'white'}
      font= {font}
      opacity={1}
      />

     </Group>
    </Canvas>
    </>
/*     <View
    style = {{
      alignItems:'center',
      justifyContent:'center',
       marginTop:-30
    }}
    >
     
    <CountdownCircleTimer
    isPlaying={isTimerRunning}
    duration={15}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[7, 5, 2, 0]}
    onComplete={() => {
       
      return   navigation.navigate({
        name:"levels/timesUp" ,
        params:{ level:levelOfGame , levelNum: props.levelNum } 
      })  
      //{ shouldRepeat: true, delay: 1.5 }

    }}
  >
    {({ remainingTime }) =>
     <Text
     style = {{
      fontSize : 65,
      fontWeight:'bold',
      color:'white'
     }}
     >{remainingTime}</Text>}
  </CountdownCircleTimer>
  </View> */
  );
};


export default Timer;

 

