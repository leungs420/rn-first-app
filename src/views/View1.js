import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Switch1 from '../components/Switch'

export default class View1 extends Component {
    state = {
        outputText: 0,
        switchValue: false,
        current: 0,
        theme: [styles.white, styles.black]
    }

    setOutputText = (text) => {
        this.setState({outputText: text});
    }

    toggleSwitch = (value) => {
        this.setState({ switchValue: value });
        console.log(value)
        if(this.state.switchValue){
            this.setState({ current: 0 });
        }else{
            this.setState({ current: 1 });
        }
    }

    render(){
        const { outputText, switchValue, current, theme } = this.state;
        let current_theme = theme[current]
        console.log(current)
        return (
            <View style={current_theme}>
                <Switch1 toggleSwitch1={this.toggleSwitch} switchValue={switchValue} title={"Change Theme"}/>
                <Text style={current_theme}>{outputText}</Text>
                <Button style={current_theme} title="Add Count" onPress={() => this.setOutputText(outputText+1)} />
                <Button style={current_theme} title="Reset Count" onPress={() => this.setOutputText(0)} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  black: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },
  white: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black'
  },
  switchText: {
      color: 'white',
      display: 'inline'
  }
});
