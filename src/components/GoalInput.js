import React, { useState } from 'react';
import { TextInput, StyleSheet, Button, View, Modal } from 'react-native'; 


const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText)
    }

    return (
        <Modal visible={props.visible} animationType="slide" >
            <View style={styles.white}>
                <TextInput 
                    placeholder={props.placeholder}
                    style={styles.inputStyle} 
                    onChangeText={goalInputHandler} 
                    value={enteredGoal}   
                />
                <Button title="Add" onPress={() => props.onAddGoal(enteredGoal) } />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 10,
        width: '80%',
        marginBottom: 10,
    },
    white: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default GoalInput; 