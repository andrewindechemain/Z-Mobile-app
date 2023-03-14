import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons/faBarsStaggered';
import ContinentsDashboard from './ContinentsDashboard';
import { useFonts } from 'expo-font';

export default function StaffPage(){
  const [fontsLoaded] = useFonts({
    'TsukimiRounded-Medium': require('../assets/fonts/ttf/TsukimiRounded-Medium.ttf'),
  });
    return(
        <>  
        <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.imgstyle} />
        <br/>
        <FontAwesomeIcon icon={ faBarsStaggered } style={styles.fontawesome} color={ 'white' } size={ 34 } />
        <h3 style={{fontFamily: 'TsukimiRounded-medium',paddingLeft:'1em', paddingTop:'2.5em',position:'absolute', top:'0px',}} >Continents</h3>
        <br/>
        <Image source={require('../assets/continent.png')} style={{resizeMode:'contain',position:'absolute', top:'2em',
        marginTop:'0em',
        marginLeft:'3em',
        height:'50%',
        width:'50%',}} />
        <p style={{fontFamily: 'TsukimiRounded-medium', fontSize:12,fontWeight:'bold', paddingTop:'19em' ,paddingLeft:'2em'}} >A View of Continents</p>
        <br/><br/><br/>
        <ContinentsDashboard/>
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
        paddingRight: '17em'
      },
      dropdown: {
        position:'left:0'
      }
  });
  