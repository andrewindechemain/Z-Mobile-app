import React from "react";
import { StyleSheet, View, Image } from 'react-native';
import ContinentsDashboard from './ContinentsDashboard';
import { useFonts } from 'expo-font';
import Menubar from './Menubar';

export default function Continents(){
  const [fontsLoaded] = useFonts({
    'TsukimiRounded-Medium': require('../assets/fonts/ttf/TsukimiRounded-Medium.ttf'),
  });
    return(
        <>  
        <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.imgstyle} />
        <br/>
        <br/>
        <Menubar />
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
  