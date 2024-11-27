import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useWordStore from "../store";

const Meaning = (props) => {
    const { easyWordStore, hardWordStore } = useWordStore();
    

    //const gameLevel = props.levelNumber
    var easy
    var lettersArray
    var wordMeaning
    const  level = props.gameLevel
    if (level === undefined) {
      level = 0;  }
    
      if(level < 400) {
         easy = true
      } else if (level>400){
        easy = false
      }
    
      if(easy == true){
         lettersArray = easyWordStore[ props.levelNumber].word.toUpperCase().split("")
         wordMeaning = easyWordStore[props.levelNumber].meaning
      } else{
        lettersArray = hardWordStore[props.levelNumber].word.toUpperCase().split("")
        wordMeaning = hardWordStore[props.levelNumber].meaning
      }

      var levelOfGame =props.gameLevel

      function capitalizeFirstWord(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }

      const inputString =  wordMeaning
    const stringResult = capitalizeFirstWord(inputString);
  return (
    <View
    style = {{
        width: '90%',
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',  
        padding: 10,
        borderRadius:5,
        marginLeft:20
        
    }}
    >
      <Text
      style ={{
        color:'white',
        fontSize:30,
        fontWeight:'bold',
        textDecorationLine:'underline',
        textDecorationColor:'white'
      }}
      >WORD</Text>
      <View
      style = {{
        width:"100%"
      }}
      >
      <Text
            style ={{
                color:'white',
                fontSize:20,
                fontWeight:'bold',
                textAlign:'center'
             
              }}
      >{stringResult}</Text>
    </View>

    </View>
  )
}

export default Meaning

const styles = StyleSheet.create({})