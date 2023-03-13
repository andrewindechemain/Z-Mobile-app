import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useFonts } from 'expo-font';

export default function HomepageDashboard(){
    const [fontsLoaded] = useFonts({
        'TsukimiRounded-Medium': require('../assets/fonts/ttf/TsukimiRounded-Medium.ttf'),
      });
    return(
        <>  
        <View style={styles.container}>
        <Text style={{marginLeft: '7em',
        marginTop: '2em',
        fontWeight:'bolder',
        fontSize:14,
        fontFamily: 'TsukimiRounded-medium',}}>Your Profile Details is as Below:</Text>
        <Text style={styles.text}>Age: 50</Text>
        <div style={{ borderTop: "2px solid #000000", marginLeft: 20, marginRight: 20, marginTop: '1em',  }}></div>
        <Text style={styles.text}>Gender: male</Text> 
        <div style={{ borderTop: "2px solid #000000", marginLeft: 20, marginRight: 20, marginTop: '1em',  }}></div>
        <Text style={styles.text}>Email: atuny0@sohu.com</Text>  
        <div style={{ borderTop: "2px solid #000000", marginLeft: 20, marginRight: 20, marginTop: '1em',  }}></div>
        <Text style={styles.text}>Phone: +63 791 675 8914</Text>  
        <div style={{ borderTop: "2px solid #000000", marginLeft: 20, marginRight: 20, marginTop: '1em',  }}></div>
        <Text style={styles.text}>Birth Date: 2000-12-25</Text>  
        <div style={{ borderTop: "2px solid #000000", marginLeft: 20, marginRight: 20, marginTop: '1em',  }}></div>
        <Text style={styles.text}>Blood Group: A−</Text> 
        <div style={{ borderTop: "2px solid #000000", marginLeft: 20, marginRight: 20, marginTop: '1em',  }}></div>
        <Text style={styles.text}>Height: 189</Text> 
        <div style={{ borderTop: "2px solid #000000", marginLeft: 20, marginRight: 20, marginTop: '1em',  }}></div>
        <Text style={styles.text}>Weight: 75.4</Text> 
        <div style={{ borderTop: "2px solid #000000", marginLeft: 20, marginRight: 20, marginTop: '1em',  }}></div>
        <Text style={styles.text}>Eye Color: Green</Text>  
        <div style={{ borderTop: "2px solid #000000", marginLeft: 20, marginRight: 20, marginTop: '1em',  }}></div>   
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
