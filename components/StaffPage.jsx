import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons/faBarsStaggered';
import StaffPageDashboard from './StaffPageDashboard';
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
        <h3 style={{fontFamily: 'TsukimiRounded-medium',paddingLeft:'1em', paddingTop:'2em',position:'absolute', top:'0px',}} >Staff Page</h3>
        <p style={{fontFamily: 'TsukimiRounded-medium', fontSize:12,fontWeight:'bold', paddingTop:'4em',paddingLeft:'2em'}} >Staff Details</p>
        <br/><br/><br/>
        <StaffPageDashboard/>
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
  