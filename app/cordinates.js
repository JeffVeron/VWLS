import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const TouchCoordinatesScreen = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const handleTouch = (event) => {
    const { locationX, locationY } = event.nativeEvent;
    setCoordinates({ x: locationX, y: locationY });
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleTouch}>
        <View style={styles.touchArea}></View>
      </TouchableWithoutFeedback>
      <View style={styles.coordinatesContainer}>
        <Text style={styles.coordinatesText}>
          X: {coordinates.x.toFixed(2)}, Y: {coordinates.y.toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchArea: {
    width: 200,
    height: 200,
    backgroundColor: 'lightgray',
  },
  coordinatesContainer: {
    marginTop: 20,
  },
  coordinatesText: {
    fontSize: 20,
  },
});

export default TouchCoordinatesScreen;
