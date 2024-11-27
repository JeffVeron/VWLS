import { 
  StyleSheet, 
  Text,
   View,
  Pressable ,
  ImageBackground,
  Button,
  Image,
TouchableOpacity } from 'react-native'
import  {useState , useEffect} from 'react'
import useWordStore from "../store";
import usePressedLetterStore from '../usePressedLetterStore';
import useScoreStore from "../scoreStore";
import useTimerStore from '../timerStore';
import { useNavigation,Link ,useRouter } from 'expo-router';
//import { MaterialCommunityIcons } from "@expo/vector-icons";
//import LinearGradient from 'react-native-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
//import * as React from 'react';
/* import { IconButton, MD3Colors } from 'react-native-paper'; */
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Timer from './Timer'
 import { Audio} from 'expo-av';


const consonantBoard = require ('../../assets/a.png')
const vowelBoard = require ('../../assets/letter-board.png')
const answerBoard = require ('../../assets/answerBoard.png')
const star =  require ('../../assets/star.png')

const gameSound = new Audio.Sound()
 const soundSource = require('../../assets/sounds/mixkit-game-show-happy-timer-666.wav')

const soundObject = new Audio.Sound()


const GameBoard = (props) => {
    const { easyWordStore, hardWordStore } = useWordStore();
    const pressedLetters = usePressedLetterStore();
    const { values, removeAllValues } = usePressedLetterStore();
     //const navigation = useNavigation()
     // gameSound.loadAsync(require('../../assets/sounds/mixkit-game-show-happy-timer-666.wav'));
     // gameSound.loadAsync(soundSource)
      
      /* 
      
      useEffect(()=>{
        gameSound.loadAsync(require('../../assets/sounds/mixkit-game-show-happy-timer-666.wav'));
      },[])


     useEffect(() => {
      const loadSound = async () => {
        
        if (gameSound !== null) {
          const status = await  gameSound.getStatusAsync();
          if (status.isPlaying) {
            await  gameSound .stopAsync();
          }
        }
      
        try {
    
    
          
          await gameSound.playAsync();
          //setGamePlaySound(gameSound);
    
      
    
    
          // Stop the sound after 15 seconds
          setTimeout(() => {
           gameSound.stopAsync()
          }, 15000);  
        } catch (error) {
          console.error('Error loading sound:', error);
        }
      };
    
      loadSound();
    
      return () => {
        gameSound && gameSound.unloadAsync();
      };
    }, []);
    
    
    
    
    async function stopGameSound() {
      if (gameSound !== null) {
        await gameSound.stopAsync();
      }
    }
    
    */


   /*  
   
   const [playing, setPlaying] = useState(false);
    const [soundPlaying, setSoundPlaying] = useState(false);
  
    const playAudio = async (key, sound) => {
      console.log(key, playing, soundPlaying);
      try {
        if (playing) {
          //await soundObject.pauseAsync();
          await soundObject.stopAsync();
          setPlaying(false);
        } else {
          setPlaying(true);
          await soundObject.loadAsync(require('../../assets/sounds/mixkit-game-show-happy-timer-666.wav')
          );
          await soundObject.playAsync();
        }
      } catch (error) {
        console.log(error);
      }
    };

    async function stopGameSound() {
      if (soundObject !== null) {
        await soundObject.stopAsync();
      }
    }


 */


/*
     useEffect(()=>{
      playAudio()
      setTimeout(() => {
        gameSound.stopAsync()
       }, 15000);
    })
    
    */



    
    const { score, updateScore, getScoreFromStorage, resetScore } =
    useScoreStore();

    const {playTimer , updateTimer , resetPlayTimer,/*  playTimerState */} = useTimerStore()

    const [showText, setShowText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(!showText);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [showText]);
    
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
         lettersArray = easyWordStore[/*  levelNumber */ props.levelNumber ].word.toUpperCase().split("")
         wordMeaning = easyWordStore[props.levelNumber].meaning
      } else{
        lettersArray = hardWordStore[props.levelNumber/* props.levelNumber */].word.toUpperCase().split("")
        wordMeaning = hardWordStore[props.levelNumber].meaning
      }

      var levelOfGame =props.gameLevel
      const nextgame =parseInt(levelOfGame) + 1;
   
      //console.log("GameBoard game level is " + props.gameLevel)
      //console.log("GameBoard levelNum is " + level)
// Function to replace vowels with "-" and store removed vowels in a separate array
const replaceVowelsWithDashAndSeparateVowels = (letters) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  // Replace vowels with "-" and store removed vowels in a separate array
  const resultArray = [];
  const removedVowelsArray = [];
  const removedVowelsIndices = [];
  const consonantsArray = [];
  const consonantsIndices = [];
 
  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    if (vowels.includes(letter)) {
      resultArray.push('-');
      removedVowelsArray.push(letter);
      removedVowelsIndices.push(i);
    } else {
      resultArray.push(letter);
      consonantsArray.push(letter);
      consonantsIndices.push(i);
    }
  }

 
  
  return { modifiedArray: resultArray, 
                    removedVowelsArray, 
                    removedVowelsIndices,
 
                    consonantsArray,
                    consonantsIndices, 
                   };
};

 
const result = replaceVowelsWithDashAndSeparateVowels(lettersArray);

//console.log(result.modifiedArray);
//console.log("the removed vowels are  " + result.removedVowelsArray);  
//console.log("vowel Indices ==>>> " + result.removedVowelsIndices)
const firstVowelIndex = result.removedVowelsIndices[0]
//console.log("first vowel index ++++++>" + firstVowelIndex )
//console.log("first vowel of lettersArray ------->  "+ lettersArray[firstVowelIndex])
//console.log("====>"+ result.modifiedArray)

//console.log(lettersArray.length)
//console.log(lettersArray[0])
//console.log( " the [ 1] of lettersArray is " + lettersArray[1])
//console.log( " the [1] of Removed vowel is " + result.removedVowelsArray[1])   //o

// console.log("consonants" +result.consonantsArray)
 //console.log("consonant indices" + result.consonantsIndices)

 const copyOfModifiedArray = [...result.modifiedArray];

//console.log("COPY MODIFIED ARRAY  "+ copyOfModifiedArray )

 

const [modifiedArrayState, setModifiedArrayState] = useState([...copyOfModifiedArray]);

 


 
const handleAPressed = () => {
  const updatedArray = [...modifiedArrayState];
  const indexOfDash = updatedArray.indexOf('-');
  
  if (indexOfDash !== -1) {
    updatedArray[indexOfDash] = 'A';
    setModifiedArrayState(updatedArray);
  }
};

const handleEPressed = () => {
  const updatedArray = [...modifiedArrayState];
  const indexOfDash = updatedArray.indexOf('-');
  
  if (indexOfDash !== -1) {
    updatedArray[indexOfDash] = 'E';
    setModifiedArrayState(updatedArray);
  }
};
 


const handleIPressed = () => {
  const updatedArray = [...modifiedArrayState];
  const indexOfDash = updatedArray.indexOf('-');
  
  if (indexOfDash !== -1) {
    updatedArray[indexOfDash] = 'I';
    setModifiedArrayState(updatedArray);
  }
};

const handleOPressed = () => {
  const updatedArray = [...modifiedArrayState];
  const indexOfDash = updatedArray.indexOf('-');
  
  if (indexOfDash !== -1) {
    updatedArray[indexOfDash] = 'O';
    setModifiedArrayState(updatedArray);
  }
};

const handleUPressed = () => {
  const updatedArray = [...modifiedArrayState];
  const indexOfDash = updatedArray.indexOf('-');
  
  if (indexOfDash !== -1) {
    updatedArray[indexOfDash] = 'U';
    setModifiedArrayState(updatedArray);
  }
};
 
 

const clearAllValues =()=>{
 removeAllValues()
}

const correctAnswer = lettersArray.join("").toUpperCase().toString() ==  modifiedArrayState.join('').toUpperCase().toString();

const searchWord = modifiedArrayState.join('').toLowerCase().toString()

const wordFound = easyWordStore.find(item => item.word === searchWord);


 // const [gamePlaySound , setGamePlaySound] = useState(null)


useEffect(()=>{
  if (correctAnswer) {
    // If correct is true, add 3 to the score
    updateScore(score + 3);
    updateTimer()
    //stopGameSound()
  // resetPlayTimer()
    console.log(playTimer)
  } else if (wordFound) {
    updateScore(score + 1);
  }
},[correctAnswer, wordFound])


const [show, setShow] = useState(false);

const showMeaning = () => {
  setShow(true);
  updateScore(score - 5);
};

//ui display 
  return (
    <View
     style = {{
      marginTop:20,
      backgroundColor:"#451952",
      height:"100%"
      //flex:1
     }}
    >


    {/* <Button title = {'stop sound'} onPress = {stopGameSound} /> */}
      <View
      style = {{
        height: "30%",
        minHeight: 80,
        width: "auto",
       // flexDirection: "row",
        flexWrap: "wrap",
         justifyContent: "space-between",
        /* marginTop:20, */
        // marginRight:'80%',
         //margignLeft:'60%'
      }} >
 <View
      style = {{
         height: "15%",
        minHeight: 80,
        width: "auto",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent:"center",
        //alignItems:"center",
        //alignSelf:"center",  
        margignLeft:'50%',
        marginTop:-10
       // marginRight:'80%'
       
        
      }} >
    { modifiedArrayState.map((letter, index) => (
  <Pressable
    style={{ padding: 10 }}
    key={index}
  >
    <ImageBackground
      source={consonantBoard}
      resizeMode={"stretch"}
      style={{
        height: 45,
        width: 40,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={
          {
          color: "white",
          fontWeight: "bold",
          alignContent: "center",
          alignSelf: "center",
          justifyContent: "center",
          fontSize: 40,
          textShadowColor: "black",
          textShadowOffset: { width: 4, height: 4 },
          textShadowRadius: 10,
          marginBottom: 3,
          marginTop: -15
        }}
      >
        {letter}
      </Text>
    </ImageBackground>
  </Pressable>
))}
</View> 
<View
 style = {{
marginTop:-20 ,
width: "100%"
 }}
>
  <Timer gameLevel = {props.gameLevel} levelOfGame = {props.gameLevel} levelNum = {props.levelNumber} />
</View>
</View>

   {/*    ANSWER BOARD   */}
 
        <View
        style = {{
            marginTop:'6%',
            flexDirection: 'row',
            justifyContent:'center',
            backgroundColor:  "#662549",  
            //backgroundColor:"yellow",
            height:'10%'
        }}   
        >
            <ImageBackground
            source={answerBoard}
            resizeMode='contain' 
            style ={styles.answerBoard}
         
            >
     <TouchableOpacity  onPress ={handleAPressed}>
   <Text style = {styles.answerText}>A</Text>
     </TouchableOpacity>
            </ImageBackground>
         
            <ImageBackground
            source={answerBoard}
            resizeMode='contain' 
            style ={styles.answerBoard}
            >
     <TouchableOpacity  onPress ={handleEPressed}>
   <Text style = {styles.answerText}>E</Text>
   </TouchableOpacity>
            </ImageBackground>



            <ImageBackground
            source={answerBoard}
            resizeMode='contain' 
            style ={styles.answerBoard}
            >
               <TouchableOpacity  onPress ={handleIPressed}>
   <Text style = {styles.answerText}>I</Text>
   </TouchableOpacity>
            </ImageBackground>


            <ImageBackground
            source={answerBoard}
            resizeMode='contain' 
            style ={styles.answerBoard}
            >
   <TouchableOpacity  onPress ={handleOPressed}>  
   <Text style = {styles.answerText}>O</Text>
   </TouchableOpacity> 
            </ImageBackground>


            <ImageBackground
            source={answerBoard}
            resizeMode='contain' 
            style ={styles.answerBoard}
            >
              <TouchableOpacity  onPress ={handleUPressed}>
   <Text style = {styles.answerText}>U</Text>
   </TouchableOpacity>
            </ImageBackground>
        </View> 
    
  

{correctAnswer ? (
                <View
                  style={{
                    display: "flex",
                    alignSelf: "center",                   
                    borderRadius:5,
                 //  padding: 10,
                   /*  marginTop:20, */
                    alignItems:'center',
                   // justifyContent:'center',
                  borderRadius:20,
                   backgroundColor:'rgba(0, 0, 0, 0.5)', 
                    backgroundImage: 'linear-gradient(to right, yellow, red,white)',  
                   WebkitBackgroundClip: 'text',   
                  }}
                >
      <Text style={{
       fontSize: 30, 
       fontWeight:'bold',
       color:'white',
    /*  color: 'transparent', */
   /*  backgroundImage: 'linear-gradient(to right, yellow, red,white)',  */
    /* WebkitBackgroundClip: 'text',   */
      padding: 10,
      textShadowColor: 'blue',
      textShadowOffset: { width: 4, height: 4 },
      textShadowRadius: 10,
        }}>
       You Got it Right
      </Text>

      <View
   style = {styles.nextStyle}
   >
    
  
    <TouchableOpacity
    onPress={() => resetPlayTimer()}
    >
    <Link href ={"/levels/lev_"+ nextgame.toString()}>
     <MaterialCommunityIcons 
     name="skip-next-circle" 
     size={40} 
     color= {"pink"}
     style ={{
      alignItems:'center',
      //justisfyContent:'center',
      alignContent:'center',
     
     }}
     />
     <Text 
     style = {{
      color:'yellow',
     // backgroundColor:'red',
      fontSize:30,
     // justifyContent:"center",
      alignSelf:'center',
      alignContent:'center',
      textAlign:'center',
     // padding:10,
      fontWeight:'bold',
     
     }}
     >Next Level</Text>  
    </Link>
    </TouchableOpacity>

 </View>

                </View>
              ) 
              /* : wordFound ?
               (
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignSelf: "center",
                    marginBottom: 10,
                  }}
                >
                  <Text>The Word is a correct word but It is not the required word for this Level</Text>
                  <View
   style = {styles.nextStyle}
   >
    
  
    <TouchableOpacity>
    <Link href ={"/levels/lev_"+ nextgame.toString()}>
     <MaterialCommunityIcons name="skip-next-circle" size={24} color= {MD3Colors.error50} />
     <Text>Next Level</Text>  
    </Link>
    </TouchableOpacity>

 </View>

                </View>
              )  */: null}

 
    </View>
  )
}

export default GameBoard

const styles = StyleSheet.create({
    answerLetters: {
        color : "blue",
        fontSize:30,
        fontWeight: 'bold',
        margin: 5,
    },
    answerBoard:{
        height: 75,
        width:65,
        margin:5,
        alignItems: "center",
        justifyContent: "center",
    },
    answerText:{
      color: "white",
      fontWeight: "bold",
      alignContent: "center",
      alignSelf: "center",
      justifyContent: "center",
      fontSize: 40,
      textShadowColor: "black",
      textShadowOffset: { width: 4, height: 4 },
      textShadowRadius: 10,
      marginBottom: 3,
     // marginTop: -15
    },
    neonContainer: {
      borderWidth: 5,
      borderColor: '#C21292',
      shadowColor: '#C21292',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 1,
      shadowRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      width:'40%',
      alignContent:'center',
      alignItems:'center',
      alignSelf:'center'
    },
    nextStyle:{
        display:'flex',
        flexDirection:'row',
       // margin: 10 ,
        backgroundColor:'#7E2553',
        borderRadius:20,
        alignContent:'center',
        marginTop:-10,
          
    }
})