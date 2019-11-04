import React, { Component } from 'react'
import { View, Switch, StyleSheet, Text } from 'react-native'

export default Switch1 = (props) => {
   return (
      <View style = {styles.container}>
         <Switch
            onValueChange = {props.toggleSwitch1}
            value = {props.switchValue}/>
         <Text>{props.title}</Text> 
      </View>
   )
}
const styles = StyleSheet.create ({
   container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 100
   }
})