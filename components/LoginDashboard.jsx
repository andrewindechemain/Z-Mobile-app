import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import { useFonts } from 'expo-font';

export default function app(){
    const [fontsLoaded] = useFonts({
        'TsukimiRounded-Medium': require('../assets/fonts/ttf/TsukimiRounded-Medium.ttf'),
      });
    return(
        <>  
        <View style={styles.container}>
        <FontAwesomeIcon icon={ faEnvelope } style={styles.fontawesome} color={ 'black' } size={ 30 } />
        <Text style={styles.text}>E-Mail</Text>
        <div style={{ borderTop: "2px solid #000000", marginLeft: 20, marginRight: 20, marginTop: '5em',  }}></div>
        <FontAwesomeIcon icon={ faLock } style={styles.fontawesome} color={ 'black' } size={ 30 } />
        <Text style={styles.text}>Password</Text>
        <div style={{ borderTop: "2px solid #000000", marginLeft: 20, marginRight: 20, marginTop: '5em',  }}></div>  
        <button style={styles.button}> LOG-IN</button>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:'93%',
      height:'90%',
      marginTop:'1em',
      backgroundColor: 'white',
    },
    button: {
        border: "2px solid #000000",
        borderRadius: "14px",
        width:'40%',
        height: '40%' ,
        marginLeft: '8em', 
        backgroundColor: '#1B2247',
        color:'#FFFFFF',
        fontWeight:'bold',
        marginRight: 20,
        marginTop: '2em', 
        marginBottom: '3em',
        fontFamily: 'TsukimiRounded-medium',
    },
    text:{
        marginLeft: '8em',
        marginTop: '4em',
        marginBottom: '-4em',
        fontWeight:'bold',
        fontSize:18,
        fontFamily: 'TsukimiRounded-medium',
    },
    fontawesome:{
        marginLeft: '1em',
        marginTop: '2.4em',
        marginBottom: '-6.7em',
    },
  });
