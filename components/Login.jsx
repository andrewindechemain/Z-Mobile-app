import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import LoginDashboard from '../components/LoginDashboard'

export default function app(){
    return(
        <>  
        <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.imgstyle} />
        <br/>
        <FontAwesomeIcon icon={ faUser } style={styles.fontawesome} color={ 'white' } size={ 50 } />
        <h2 >Welcome</h2>
        <h3>Log-in to continue</h3>
        <br/>
        <LoginDashboard/>
        </View>
        </>
    );
}
const styles = StyleSheet.create({
    body: {
        fontFamily: 'TsukimRounded-Medium',
    },
    container: {
      flex: 1,
      width:'100%',
      backgroundColor: '#1B2247',
      color: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: '1em',
    },
    imgstyle: {
        resizeMode:'contain',
        position:'absolute', 
        top:'0px',
        marginTop:'-4em',
        height:'14em',
        width:'14em',
      },
      fontawesome: {
        paddingTop: '8em'
      },
  });