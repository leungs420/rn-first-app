import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import Switch1 from '../components/Switch'
import GoalInput from '../components/GoalInput';
import GoalItem from '../components/GoalItem';

export default function View1() {
    const [courseGoals, setCourseGoals] = useState([])
    const [isAddMode, setIsAddMode] = useState(false);

    const addGoalHandler = (enteredGoal) => {
        setCourseGoals(currentGoals => [...currentGoals, {key: Object.keys(courseGoals).length+1, value: enteredGoal}])
        setIsAddMode(false)
      }

    const deleteListItem = (goalId) => {
        setCourseGoals((courseGoals) => {
          return courseGoals.filter((goal) => goal.key !== goalId);
        });
    }

    const cancalGoalHandler = () => {
      setIsAddMode(false)
    }


    // toggleSwitch = (value) => {
    //     this.setState({ switchValue: value });
    //     console.log(value)
    //     if(this.state.switchValue){
    //         this.setState({ current: 0 });
    //     }else{
    //         this.setState({ current: 1 });
    //     }
    // }
    
    // console.log(current)
    return (
        <View style={styles.mainView}>
            <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
            <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} placeholder="Course Goal" onCancel={cancalGoalHandler}/>
            
            <FlatList 
                keyExtractor={(item, index) => item.key}
                data={courseGoals} 
                renderItem={itemData => <GoalItem id={itemData.item.key} value={itemData.item.value} onDelete={deleteListItem}/> } 
            />
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
  black: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },
  mainView: { 
    padding:50,
  }
});
//   switchText: {
//       color: 'white',
//       display: 'inline'
//   },
