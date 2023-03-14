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
        <DataTable.Header style={{ fontWeight:'bold',fontFamily: 'TsukimiRounded-medium', fontSize:3,}}>
          <DataTable.Title>STAFF NUMBER</DataTable.Title>
          <DataTable.Title>NAME</DataTable.Title>
          <DataTable.Title>EMAIL</DataTable.Title>
          <DataTable.Title>DEPARTMENT</DataTable.Title>
          <DataTable.Title>SALARY</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row>
          <DataTable.Cell>ZAAC001</DataTable.Cell>
          <DataTable.Cell>John Doe</DataTable.Cell>
          <DataTable.Cell>jd@zamara.co.ke</DataTable.Cell>
          <DataTable.Cell>ICT</DataTable.Cell>
          <DataTable.Cell>50000</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>ZARIB001</DataTable.Cell>
          <DataTable.Cell>Mary jane</DataTable.Cell>
          <DataTable.Cell>mj@zamara.co.ke</DataTable.Cell>
          <DataTable.Cell>ICT</DataTable.Cell>
          <DataTable.Cell>60000</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>ZAAC002</DataTable.Cell>
          <DataTable.Cell>Chris Columbus</DataTable.Cell>
          <DataTable.Cell>cc@zamara.co.ke</DataTable.Cell>
          <DataTable.Cell>HR</DataTable.Cell>
          <DataTable.Cell>60000</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>ZAAC003</DataTable.Cell>
          <DataTable.Cell>Paul Mwangi</DataTable.Cell>
          <DataTable.Cell>pm@zamara.co.ke</DataTable.Cell>
          <DataTable.Cell>Finance</DataTable.Cell>
          <DataTable.Cell>70000</DataTable.Cell>
        </DataTable.Row>    
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
    tableHeader:{
      fontWeight:'bold',
      fontFamily: 'TsukimiRounded-medium',
      fontSize:3,
    }
  });
