import { View, Text,Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';
import Colors from '../../Utils/Colors';
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../../hooks/useWarmUpBrowser";
import { useOAuth } from '@clerk/clerk-expo';

export default function LoginScreen() {

  WebBrowser.maybeCompleteAuthSession();

  useWarmUpBrowser();
 
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress=async()=>{
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      
    }

  }
  return (
    <View  style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:30
    }}>
      <Image source={require('../../../assets/images/logo.png')}
        style={styles.logoImage}
      />

      <Image source={require('../../../assets/images/ev-maker.png')}
        style={styles.bgimage}
      />
      <View style={{padding:20}}>
        <Text style={styles.heading}>Find the Nearest EV Station</Text>
        <Text style={styles.desc}>At Ease!</Text>
        <Text style={styles.small}>Get the location of all the ev stations</Text>
        <TouchableOpacity style={styles.button}
        onPress={onPress}
        >
            <Text style={{color:Colors.WHITE,
                          textAlign:'center',
                          fontFamily:'outfit',
                          fontSize:17
                          }}>
                Continue with Google
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  logoImage:{
    width:200,
    height:60,
    objectFit:'contain',
    marginTop:40,
  },
  bgimage:{
    width:'200%',
    height:180,
    marginTop:40,
    objectFit:'contain'
  },
  heading:{
    fontSize:22,
    fontFamily:'outfit-bold',
    textAlign:'center',
    marginTop:30
  },
  small:{
    textAlign:'center',
  },
  desc:{
    fontSize:25,
    fontFamily:'outfit-bold',
    textAlign:'center',
    color:'#03A63C'
  },
  button:{
    backgroundColor:Colors.PRIMARY,
    padding:16,
    display:'flex',
    borderRadius:99,
    marginTop:50


  }
})
