import { Platform ,StyleSheet, Text, View ,useWindowDimensions} from 'react-native'
import React, {useState}from 'react'
import GameBoard from '../components/GameBoard'
import Scoreboard from '../components/Score'
import Timer from '../components/Timer'
import Logo from '../components/Logo'
import Level from '../components/Level'
import Meaning from '../components/Meaning'
 
const lev_122  = () => {
  const { width } = useWindowDimensions();
  const level = 122;
  const levelNum =144 ;

  return (
    <View
    style={{
      backgroundColor: "#451952",
      height:'100%',
      width:width
    }}
    >
        <Logo/>
        <View style = {{
              flexDirection:'row',
              height:40
            }}   >
        <Level gameLevel={level} />
        < Scoreboard />
        </View>
      <Meaning gameLevel={level}  levelNumber={levelNum} />
       
      <GameBoard  gameLevel={level} levelNumber={levelNum} />
          
    </View>
  )
}

export default lev_122

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