import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useFonts } from 'expo-font';

export default function StaffPageDashboard(){
    const [fontsLoaded] = useFonts({
        'TsukimiRounded-Medium': require('../assets/fonts/ttf/TsukimiRounded-Medium.ttf'),
      });
    return(
        <>  
        <View style={styles.container}>
           
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
    text:{
        marginLeft: '2em',
        marginTop: '0.5em',
        marginBottom: '-3',
        fontWeight:'bold',
        fontSize:12,
        fontFamily: 'TsukimiRounded-medium',
    },
    fontawesome:{
        marginLeft: '1em',
        marginTop: '2.4em',
        marginBottom: '-6.7em',
    },
  });
