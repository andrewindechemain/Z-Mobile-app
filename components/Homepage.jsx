import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import HomepageDashboard from './HomepageDashboard';
import { useFonts } from 'expo-font';
import Menubar from './Menubar';

export default function Homepage(){
  const [fontsLoaded] = useFonts({
    'TsukimiRounded-Medium': require('../assets/fonts/ttf/TsukimiRounded-Medium.ttf'),
  });
    return(
        <>  
        <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.imgstyle} />
        <Menubar />
        <br/>
        <p style={{fontFamily: 'TsukimiRounded-medium', fontSize:16,fontWeight:'bold', paddingTop:'1em',paddingLeft:'1em'}} >Welcome Stephen Amimo</p>
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
        paddingRight: '17em'
      },
      dropdown: {
        position:'left:0'
      },
      menu: {
        maxWidth: '2em',
        maxHeight: '2em',
      }
  });
  