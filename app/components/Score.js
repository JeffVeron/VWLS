import { View, Text, Button } from "react-native";
import React, { useEffect } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import useScoreStore from "../scoreStore";

const Scoreboard = () => {
  const { score, updateScore, getScoreFromStorage, resetScore } =
    useScoreStore();

  useEffect(() => {
    getScoreFromStorage(); 
  }, []);

  const handleIncrementScore = () => {
    updateScore(score + 1);
  };
  const handleResetScore = () => {
    resetScore();
  };

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        height: 40,
        width: "40%",
       // margin: 5,
        alignSelf: "center",
        justifyContent: "center",
        marginLeft:'10%'
      }}
    >
       
      <FontAwesome5 name="coins" size={30} color="gold" />
      <Text
        style={{
          color: "lime",
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
          justifyContent: "center",
          marginBottom: 4,
        }}
      >
        {score}
      </Text>
    {/* <Button title="Reset Score" onPress={handleResetScore}/> */}
    </View>
  );
};

export default Scoreboard;
