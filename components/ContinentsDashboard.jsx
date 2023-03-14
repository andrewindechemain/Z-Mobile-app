import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { DataTable } from 'react-native-paper';

export default function StaffPageDashboard(){
    const [fontsLoaded] = useFonts({
        'TsukimiRounded-Medium': require('../assets/fonts/ttf/TsukimiRounded-Medium.ttf'),
      });
    return(
        <>  
      <View style={styles.container}>
      <p style={{fontFamily: 'TsukimiRounded-medium',color:"black", fontSize:12,fontWeight:'bold', paddingTop:'0.5em',paddingLeft:'12em'}} >Continents</p>
        <DataTable.Header style={{ fontWeight:'bold',fontFamily: 'TsukimiRounded-medium', fontSize:3,}}>
          <DataTable.Title>CODE</DataTable.Title>
          <DataTable.Title>CONTINENTS</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row>
          <DataTable.Cell>ZAAC001</DataTable.Cell>
          <DataTable.Cell>AFRICA</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>ZAAC002</DataTable.Cell>
          <DataTable.Cell>EUROPE</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>ZAAC003</DataTable.Cell>
          <DataTable.Cell>ASIA</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>ZAAC003</DataTable.Cell>
          <DataTable.Cell>AUSTRALIA</DataTable.Cell>
        </DataTable.Row>    
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:'93%',
      height:'5%',
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
    tableHeader:{
      fontWeight:'bold',
      fontFamily: 'TsukimiRounded-medium',
      fontSize:3,
    }
  });
