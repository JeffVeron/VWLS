import { View, Text , StyleSheet } from 'react-native'
import React from 'react'

const LevelBars = () => {
  return (
    <View style = {styles.chocolateBar}>
      <Text style = {styles.itemText}>LevelBars</Text>
    </View>
  )
}

export default LevelBars

const styles  = StyleSheet.create({
    chocolateBar: {
        //marginTop:20,
           marginBottom: 30 ,
        // marginVertical: 5,
         backgroundColor:  '#1D2B53' /* "#8B4513" */, // Chocolate brown color
         padding: 10,
         width: 200,
         justifyContent: "center",
         alignItems: "center",
         borderTopWidth: 8,
         borderTopColor: "#D2691E", // Lighter shade for the top border
         borderLeftWidth: 4,
         borderLeftColor: "#D2693D",
         borderBottomWidth: 8,
         borderBottomColor: "#D2491E",
         borderRightWidth: 4,
         borderRightColor: "#D2791E",
         boxshadowColor: "rgba(0, 0, 0, 0.5)", // Shadow color
         boxshadowOffset: { width: 0, height: 6 }, // Shadow offset
         boxshadowOpacity: 0.8, // Shadow opacity
         boxshadowRadius: 10, // Shadow radius
         elevation: 15, // Android shadow
       },
       itemText: {
          fontSize: 20,
          color: "white",
          fontWeight: "bold",
        },
   
})