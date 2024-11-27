import { Canvas, Line, vec , Circle, Group, Points  , Vertices, 
 } from "@shopify/react-native-skia";
 import { useWindowDimensions , StyleSheet , View } from "react-native";
import React, { useRef, useEffect } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
  withRepeat,
  Easing,ReduceMotion
} from 'react-native-reanimated';

const EASING = Easing.elastic(1.5);

const PlayButton = () => {
const {width , height } = useWindowDimensions()
//const sizeRef = (50); // Initial size of the triangle
//const vertices = [{ x: screenMidX - 50, y: screenMidY + 50 }]; // Your triangle vertices
//const animatedSize = useSharedValue(sizeRef); // shared value for the size of the triangle

const animatedX1 = useSharedValue( 50)
const animatedX2 = useSharedValue( 50)
const animatedX3 = useSharedValue( 150)
const animatedY1 = useSharedValue( 50)
const animatedY2 = useSharedValue(150)
const animatedY3 = useSharedValue( 50)

 
  const screenMidX = width/2
const screenMidY = height/2 


    const points = [
        vec(100, 60),
        vec(6.8, 114),
        vec(114, 188),
       vec(114 , 62) 
      ];


   

      //const vertices = [vec(96, 62), vec(250, 144), vec(144, 188),];

      const vertices = [
        { x: screenMidX-50, y: screenMidY -50 }, // Top vertex
        { x: screenMidX-50 , y: screenMidY +150 }, // Bottom left vertex
        { x: screenMidX + 150, y: screenMidY + 50 }, // Bottom right vertex
      ]; 
      const animatedVertices = [
        { x: animatedX1.value, y: animatedY1.value },
        { x: animatedX2.value, y: animatedY2.value },
        { x: animatedX3.value, y: animatedY3.value }

     
      ];

      useEffect(()=>{
        animatedX2.value = withRepeat(withTiming(50*0.2 , {duration:2000,Easing:Easing.linear}),-1)
      },[animatedX2.value])



    /*   const animatedStyle = useAnimatedStyle(() => {
        return {
          width: animatedSize.value,
          height: animatedSize.value,
        };
      }); */

/*       useEffect(() => {
        const animateTriangle = () => {
          animatedSize.value = withRepeat(
            withTiming(animatedSize.value === 50 ? 100 : 50, {
              duration: 500,
            }),
            -1,  
            true  
          );
        };
    
        const animationInterval = setInterval(animateTriangle, 500);
    
        return () => {
          clearInterval(animationInterval);
        };
      }, [animatedSize]); */

 
      const size = 256;
      const r = useSharedValue(0);
      const c = useDerivedValue(() => size - r.value);
      useEffect(() => {
        r.value = withRepeat(withTiming(size * 0.33, { duration: 1000 }), -1);
      }, [r, size]);

 
       const x1= 100
       const x2 = 100
       const x3 = useSharedValue(230)
       const y1 = 230
       const y2 = useSharedValue(230)
       const y3 = 300

   /*     const newTriangle = [
        {x:x1 , y:y1},
        {x:x2, y:y2},
        {x:x3 , y:y3},
       ]
 */


/*  
const newTriangle = [
  vec(x1,y1),
  vec(x2,y2),
  vec(x3,y3)
 ] 
 
 */

/*  const scale = useSharedValue(1);
 const scaleStyles = useAnimatedStyle(() => ({
  transform: [{ scale: scale.value }],
}));

React.useEffect(() => {
  scale.value = withRepeat(
    withTiming(scale.value * 2, { duration: 1000 }),
    -1,
    true
  );
}, []); */

  return (
    <Canvas style={{ flex: 1 }}>
      <Line
        p1={vec(0, 0)}
        p2={vec(256, 256)}
        color="lightblue"
        style="stroke"
        strokeWidth={4}
      />

<Points
        points={points}
        mode="polygon"
        color="red"
        style="fill"
        strokeWidth={4}
      />

{/* <Animated.View style={[styles.triangle, animatedStyle]}> */}
  <Vertices vertices={ animatedVertices}  color = {'green'} />  
      {/* </Animated.View> */}

      <Group blendMode="multiply">
        <Circle cx={r} cy={r} r={r} color="cyan" />
        <Circle cx={c} cy={r} r={r} color="magenta" />
        <Circle
          cx={size/2}
          cy={c}
          r={r}
          color="yellow"
        />
      </Group>

      
    </Canvas>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ball: {
    height: 50,
    width: 50,
    backgroundColor: '#b58df1',
    borderRadius: 50,
    marginRight: 80,
  },
  triangle: {
  width: 0,
  height: 0,
  backgroundColor: 'transparent',
  borderStyle: 'solid',
  borderTopWidth: 0,
  borderRightWidth: 50,
  borderBottomWidth: 100,
  borderLeftWidth: 50,
  borderTopColor: 'transparent',
  borderRightColor: 'transparent',
  borderBottomColor: '#b58df1',
  borderLeftColor: 'transparent',
},

});
export default PlayButton