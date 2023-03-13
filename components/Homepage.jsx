import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import HomepageDashboard from './HomepageDashboard';
import { useFonts } from 'expo-font';

export default function Homepage(){
  const [fontsLoaded] = useFonts({
    'TsukimiRounded-Medium': require('../assets/fonts/ttf/TsukimiRounded-Medium.ttf'),
  });
    return(
        <>  
        <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.imgstyle} />
        <br/>
        <FontAwesomeIcon icon={ faUser } style={styles.fontawesome} color={ 'white' } size={ 30 } />
        <h3 style={{fontFamily: 'TsukimiRounded-medium',paddingLeft:'1em', paddingTop:'2em',position:'absolute', top:'0px',}} >Home Page</h3>
        <p style={{fontFamily: 'TsukimiRounded-medium', fontSize:12,fontWeight:'bold', paddingTop:'4em',paddingLeft:'4em'}} >Welcome Stephen Amimo</p>
        <br/><br/><br/>
        <HomepageDashboard/>
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
      paddingBottom: '1em',
    },
    imgstyle: {
        resizeMode:'contain',
        position:'absolute', 
        top:'0px',
        marginTop:'-3em',
        height:'10em',
        width:'8em',
      },
      fontawesome: {
        paddingTop: '-1em',
        paddingRight: '20em'
      },
  });
  