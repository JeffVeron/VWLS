import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'

const Level = (props) => {
    const { width } = useWindowDimensions(); 
  return (
    <View 
    style = {{
        width: '30%',
        height:40,
       // marginLeft:'1.%',
        /* marginTop:'0.2%'  */
    }}
    >
      <Text
      style = {{
        fontSize :20,
        fontWeight:'bold',
        color:'white'
      }}
      >Level : {props.gameLevel}</Text>
    </View>
  )
}

export default Level

const styles = StyleSheet.create({})