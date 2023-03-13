import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'

export default function app(){
    return(
        <>  
        <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.imgstyle} />
        <FontAwesomeIcon icon={ faUser } color={ 'white' } size={ 50 } />
        <h2 >Welcome</h2>
        <h3>Log-in to continue</h3>
        </View>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:'100%',
      backgroundColor: '#1B2247',
      color: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: '7em'
    },
    imgstyle: {
        resizeMode:'contain',
        position:'absolute', 
        top:'0px',
        marginTop:'0px',
        height:'14em',
        width:'14em',
      },
  });