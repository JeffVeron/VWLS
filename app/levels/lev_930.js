import { TouchableOpacity , Platform ,StyleSheet, Text, View ,useWindowDimensions} from 'react-native'
import React, {useState, useEffect}from 'react'
import Logo from '../components/Logo'
import {useRouter, Link } from 'expo-router'
import { RewardedAd,RewardedAdEventType,TestIds} from "react-native-google-mobile-ads";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import useScoreStore from "../scoreStore";

 
const adUnitId3 = __DEV__
  ? TestIds.REWARDED
  : "ca-app-pub-3813494006589273/2773688097";

  const rewarded = RewardedAd.createForAdRequest(adUnitId3, {
    keywords: ["words", "clothing", "games", "entertainment"],
  });



 export default function lev_930 () {
    const { width } = useWindowDimensions();
    const level = 930 ;
    const levelNum = 2041;
  

    const [loadedR, setLoadedR] = useState(false);
    const router = useRouter()
    const nextgame =parseInt(level) + 1;
    const nextLevelLink  = 'levels/lev_'+nextgame.toString()
    const { score, updateScore, getScoreFromStorage, resetScore } = useScoreStore();
      
    useEffect(() => {
      const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED,
         () => {
        setLoadedR(true);
        rewarded.show();
        updateScore(score +1);
      });
  const unsubscribeEarned = rewarded.addAdEventListener(RewardedAdEventType.EARNED_REWARD,
     (reward) => {
    console.log('User earned reward of ', reward);
    
    router.push(nextLevelLink)
  });
      rewarded.load();
      return () => {
        unsubscribeLoaded();
        unsubscribeEarned();
      };
    },[]);   
  


   return (
    <View
    style={{
      backgroundColor: "#451952",
      height:'100%',
      width:width,
      alignContent:'center',
      alignItems:'center',
      justifyContent:'center',

    }}
    >
   <Logo/>
   <TouchableOpacity>
                    <Link 
                    href={nextLevelLink}>
                      <View
                        style={{
                          backgroundColor: "#ECA869",
                          width: 114,
                          height: 100,
                          borderRadius: 40,
                          borderWidth: 4,
                          borderColor: "#594545",
                        }}
   
                      >
                        <MaterialCommunityIcons
                          name="skip-next-circle"
                          size={35}
                          color="#594545"
                          style={{
                            alignContent: "center",
                            alignSelf: "center",
                            justifyContent: "center",
                            marginTop: 4,
                          }}
                        />
                        <Text
                          style={{
                            color: "#594545",
                            textAlign: "center",
                            fontSize: 20,
                            fontWeight: "bold",
                            fontFamily: "bondari",
                          }}
                        >
                          NEXT LEVEL  
                        </Text>
                      </View>
                    </Link> 
   </TouchableOpacity>  


    </View>
   )
 }
 
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