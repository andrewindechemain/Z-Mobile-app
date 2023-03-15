import React from "react";
import { StyleSheet, View} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons/faBarsStaggered';
import { useFonts } from 'expo-font';
import SelectDropdown from 'react-native-select-dropdown';

export default function Menubar(){
  const [fontsLoaded] = useFonts({
    'TsukimiRounded-Medium': require('../assets/fonts/ttf/TsukimiRounded-Medium.ttf'),
  });
  const menuitems = ["Home", "Staff", "Continents", "Sign-out"]
    return(
        <>  
        <View style={styles.container}>
        <br/>
        <FontAwesomeIcon icon={ faBarsStaggered } style={styles.fontawesome} color={ 'white' } size={ 34 } />
        <br/><br/><br/>
        <SelectDropdown
          data={menuitems}
            onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item
          }}
        />
        </View>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
      width:'100%',
      paddingTop: '1em',
      paddingLeft:'1em',
      paddingBottom: '1em',
    },
      fontawesome: {
        position:'absolute',
        marginTop:'2em',
        paddingRight: '17em',
        marginBottom:'38em',
        marginLeft:'0px'
      },
  });
  