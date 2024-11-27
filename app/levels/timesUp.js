import { StyleSheet, Text, View , TouchableOpacity ,useWindowDimensions ,Button} from 'react-native'
import React , {useState , useEffect} from 'react'
import {Link , useLocalSearchParams} from   'expo-router'
import useWordStore from "../store";
import useScoreStore from "../scoreStore";
import { Entypo } from '@expo/vector-icons';
//import { FontAwesome6 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Score from '../components/Score'
/* import { Entypo } from '@expo/vector-icons'; */
import { Audio} from 'expo-av';



const timesUp = (props) => {
  const {width , height} = useWindowDimensions()
  const { easyWordStore, hardWordStore } = useWordStore();
  const { score, updateScore, getScoreFromStorage, resetScore } =
  useScoreStore();
  const [isPressed, setIsPressed] = useState(false);

    const params = useLocalSearchParams()
    const nextgame =parseInt(params.level) + 1;
   //const level = params.level
   const levelNum = params.levelNum
 
   var showTheWord  = false 

   

   const gameLevel = props.level
   var easy
   var lettersArray
   var wordMeaning
   let level = gameLevel
   if (level === undefined) {
     level = 0;  }
   
     if(level < 400) {
        easy = true
     } else if (level > 400){
       easy = false
     }
   
     if(easy == true){
        lettersArray = easyWordStore[levelNum ].word.toUpperCase().split("")
        wordMeaning = easyWordStore[levelNum].meaning
     } else{
       lettersArray = hardWordStore[levelNum].word.toUpperCase().split("")
       wordMeaning = hardWordStore[levelNum].meaning
     }

   




  const [gamePlaySound , setGamePlaySound] = useState(null)
  const gameSound = new Audio.Sound()
  
  useEffect(() => {
    const loadSound = async () => {
     
      try {
        await gameSound.loadAsync(require('../../assets/sounds/time.mp3'));
        await gameSound.playAsync();
        setGamePlaySound(gameSound);
      } catch (error) {
        console.error('Error loading sound:', error);
      }
    };
    loadSound()
    return () => {
      gamePlaySound &&  gamePlaySound.unloadAsync();
    };
  }, []); 

  async function stopGameSound() {
    if (gamePlaySound !== null) {
      await gamePlaySound.stopAsync();
    }
  }
 


  function handleShowWord (){
    setIsPressed(!isPressed);
     updateScore(score - 5);
   }

console.log("Level  " + level + "Word ==>" +lettersArray)


  return (
    <View
    style = {{
      backgroundColor:'rgba(0, 0, 0, 0.5)',
      width:width ,
      height:'100%'
    }}
    >

      <View
      style = {{
        marginTop :20,
        marginRight:50,
       
        paddingLeft:40,
        paddingRight:100,
    /*    alignSelf:'center',
        alignContent:'center',
        justifyContent:'center',  */
        height: 40,
        width:'80%',
        flexDirection:'row'
      }}
      >

              <View
            style = {{
              backgroundcolor:'#864AF9',
              flexDirection:'row',
              alignSelf:'center',
              alignContent:'center',
              justifyContent:'center',
            }} > 
            <Entypo name="menu" size={30} color="white"
            style = {{
              alignSelf:'center',
              alignContent:'center',
              justifyContent:'center',
            }}
            />
            <Link href={'/levels'} onPress={stopGameSound}>
            <Text
        style = {{
         // color: '#864AF9',
         color :'white',
          fontSize:20,
          fontWeight:'bold',
          alignSelf:'center',
          alignContent:'center',
          justifyContent:'center',
        //  marginTop:90
          //backgroundcolor:'#864AF9',
        }}
        >LEVELS</Text>
            </Link>

       </View> 
      <Score/>
      </View>
    
    
      <Text
      style = {{
        marginTop:20 ,
        color: '#864AF9',
        backgroundColor:'white',
        fontSize : 30 ,
        fontWeight:'bold',
        alignContent:'center',
        justifyContent:'center',
        alignSelf:'center',
        borderRadius:15,
        borderWidth:2.5,
        borderColor: 'rgba(0 ,0, 0, 0.35)',
      }}
      >The Time is Up!!</Text>

<View
style = {{
  flexDirection:'row',
  marginTop: 20,
  width: '100%',
  alignContent:'center',
  justifyContent:'center',
 // width: width
}}
>
  <View
  style = {styles.restartBox}
  >
<TouchableOpacity >
    <Link href={'/levels/lev_'+level}  onPress = {stopGameSound} > 
   
    <Text
    style = {styles.levelText}
    >
      <FontAwesome5 name="hourglass-start" size={24} color="white" />
      
      Restart </Text>
    </Link>
 </TouchableOpacity>
  </View>


<View
style = {styles.nextLevelBox}
>
<TouchableOpacity  >
    <Link href={'/levels/lev_'+nextgame.toString()} onPress = {stopGameSound}  >  
   <Text
   style = {styles.nextLevelText}
   >
    <AntDesign name="stepforward" size={25} color="white" />
       Next</Text> 
    </Link>
 </TouchableOpacity>
</View>


</View>

{/* <Button  title = {'stopSound'} onPress = {stopGameSound}/>
 */}
<View
style = {styles.wordBox}
>
<TouchableOpacity 
onPress={handleShowWord}
>
  <View 
  style = {styles.showWord}
  >
    <Text
    style = {styles.scoreText}>
    -5
    </Text>
    <Text
    style = {styles.showWordText}
    >Show Word </Text>
    <Entypo name="archive" size={24} color="yellow"  style = 
    {styles.showWordIcon}
    />
  </View>
 </TouchableOpacity>

  <View 
  style ={styles.wordArea}
  >
   { isPressed ? (
     <Text 
    style= {styles.hiddeWord}
    >
      {lettersArray.join('').toUpperCase()}
    </Text>
  
) : (
 <Fontisto name="locked" size={24} color="black"  style = {styles.hiddeWord}/>
    
)}
 
    
  </View>

</View>


    </View>
  )
}

export default timesUp

const styles = StyleSheet.create({
  restartBox:{
    marginRight:"10%"
  },
  levelText:{
    fontSize:25,
    color:'white',
    padding:10,
    fontWeight:'bold',
    alignSelf:'center',
    backgroundColor:'#864AF9',
    borderWidth: 10,
    borderColor: 'white',
    width:350,
    borderRadius:20
  },
  nextLevelText:{
    fontSize:25,
    color:'white',
    padding:10,
    fontWeight:'bold',
    alignSelf:'center',
    backgroundColor: '#864AF9',
    borderWidth: 10,
    borderColor: 'white',
    width:350,
    borderRadius: 20
  },
wordBox :{
  alignContent:"center",
  justifyContent:'center',
  alignItems:'center'
},
showWord:{
 display:'flex',
 flexDirection:'row',
 width: 400, 
 alignContent:'center',
 justifyContent:'center',
 padding:15
},
showWordText:{
  textAlign:'center',
  justifyContent:'center',
  alignSelf:"center",
  paddingRight :15,

},
 
wordArea : {
  marginTop:20,
  backgroundColor:'white' ,
 //backgroundColor:'#864AF9',
  alignSelf:'center',
  alignContent:'center',
  height : 350 , 
  //width: 400,
  borderWidth: 15,
  borderColor:'#864AF9', 
  width:350,
  borderRadius:350/2
},
hiddeWord:{
  alignSelf:'center',
  justifyContent:'center',
  fontSize:45,
  fontWeight:'bold',
  marginTop:'35%',
  color: '#864AF9'
},
wordBox:{
  marginTop:40,
  //backgroundColor:'red'
},
showWord:{
  marginTop:10,
  backgroundColor:'#864AF9',
  width:250,
  height :80,
  display:'flex',
  flexDirection:'row',
  alignSelf:"center",
  padding:10,
  borderRadius:10,
  borderWidth: 2.5,
  borderColor: 'rgba(0 ,0, 0, 0.35)',
  
  
},
scoreText:{
 color:'red',
 fontSize :30,
 fontWeight:'bold',
 alignContent:'center',
 justifyContent:'center',
 alignSelf:'center',
 borderWidth: 2.5,
  borderColor: 'rgba(0 ,0, 0, 0.35)',
//borderColor:'#864AF9',
//backgroundColor:'#864AF9',
 width:60,
 height:60,
 borderRadius: 60/2,
 paddingLeft:5,
 paddingTop:10
},
showWordText:{
  color :'white',
  fontSize :20,
  alignContent:'center',
  justifyContent:'center',
  alignSelf:'center',
  padding:10

},
showWordIcon:{
  color:'white',
    fontWeight:'bold',
    alignContent:'center',
    justifyContent:'center',
    alignSelf:'center',
    padding:10
}
})