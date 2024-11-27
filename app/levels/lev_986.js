import { StyleSheet,  View ,useWindowDimensions} from 'react-native'
import React from 'react'
import GameBoard from '../components/GameBoard'
import Scoreboard from '../components/Score'
import Timer from '../components/Timer'
import Logo from '../components/Logo'
import Level from '../components/Level'
import Meaning from '../components/Meaning'
 
 export default function lev_986 () {
    const { width } = useWindowDimensions();
    const level = 986 ;
    const levelNum = 1541;
  
   return (
    <View
    style={{
      backgroundColor: "#451952",
      height:'100%',
      width:width
    }}
    >
        <Logo/>
        <View  style = {{
              flexDirection:'row',
              height:40
            }}  >
        <Level gameLevel={level} />
        < Scoreboard />
        </View>
      <Meaning gameLevel={level}  levelNumber={levelNum} />
      
      <GameBoard  gameLevel={level} levelNumber={levelNum} />
             
    </View>
   )
 }
 
 const styles = StyleSheet.create({
    stopWatchContainer: {
      paddingVertical: 16,
      paddingHorizontal: 48,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      backgroundColor: 'black',
      borderColor: 'gray',
      borderRadius: 24,
    },
    stopWatchChar: {
      fontSize: 48,
      fontWeight: 'bold',
      letterSpacing: 1,
      color: '#9CCC65',
    },
  })