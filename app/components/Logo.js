import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'

const Logo = () => {
    const { width } = useWindowDimensions(); 
  return (
    <View 
    style = {{
        width: width,
        alignContent:'center',
        justifyContent:'center',
        alignSelf:'center',
        alignItems:'center'
    }}
    >
      <Text 
      style = {{
        fontSize: 60,
        fontWeight:'bold',
        /* marginTop:30, */
        color:'white'

      }}
      >VWLS</Text>
    </View>
  )
}

export default Logo

 