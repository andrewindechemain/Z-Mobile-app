import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

export default function app(){
    return(
        <View style={styles.container}>
        <Image source = {require("./assets/logo.png")}/> 
      </View>
    );
}