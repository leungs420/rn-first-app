import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState(0)
  return (
    <View style={styles.test}>
      <Text style={{color:"white"}}>{outputText}</Text>
      <Button title="Add Count" onPress={() => setOutputText(outputText+1)} />
      <Button title="Reset Count" onPress={() => setOutputText(0)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  test: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
