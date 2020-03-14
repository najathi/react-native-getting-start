import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  /*const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enterText => {
    setEnteredGoal(enterText);
  }; */

  /* const addGoalHandler = () => {
    //setCourseGoals([...courseGoals, enteredGoal])
    //setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
    // setCourseGoals(currentGoals => [...currentGoals, { uid: Math.random().toString(), key: enteredGoal }]);
    setCourseGoals(currentGoals => [...currentGoals, { uid: Math.random().toString(), value: enteredGoal }]);
  }; */

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...currentGoals, { uid: Math.random().toString(), value: goalTitle }]);
    setIsAddMode(false);
  };

  const removeHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.uid !== goalId);
    });
  }

  const cancelModelHandler = () => {
    setIsAddMode(false);
  }

  useEffect(() => {
    console.log(courseGoals);
  });

  return (
    // introduction
    // <ScrollView>
    <View style={styles.screen}>
      <Button
        title="Add New Goal"
        onPress={() => setIsAddMode(true)} />
      {/* <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          value={enteredGoal}
          onChangeText={goalInputHandler} />
        <Button
          title="ADD"
          onPress={addGoalHandler} />
      </View> */}
      <GoalInput
        visible={isAddMode}
        cancel={cancelModelHandler}
        onAddGoal={addGoalHandler} />
      <View>
        {/* <ScrollView> */}
        {
          // courseGoals.map((goal, index) => {
          //   return (
          //     <View style={styles.listItem} onPress={removeHandler.bind(index)}>
          //       <Text
          //         kay={index}>
          //         {goal}
          //       </Text>
          //     </View>
          //   )
          // })
        }
        {/* </ScrollView> */}

        {/* We don't need to specify ketExtractor in FlatList when we use property of key and id but if we use any name like uid, you want to extract the key. */}
        {/* <FlatList
          keyExtractor={(item, index) => item.uid}
          data={courseGoals}
          renderItem={itemData => (
            <View style={styles.listItem}>
              <Text>
                {itemData.item.value}
              </Text>
            </View>
          )} /> */}
        <FlatList
          keyExtractor={(item, index) => item.uid}
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem
              id={itemData.item.uid}
              onDelete={removeHandler}
              title={itemData.item.value} />
          )} />
      </View>
    </View >
    // </ScrollView >

    // flex box
    // <View style={{
    //   padding: 50,
    //   flexDirection: 'row',
    //   width: '80%',
    //   height: 300,
    //   justifyContent: 'space-around',
    //   alignItems: 'stretch'
    // }}
    // >
    //   <View style={{
    //     backgroundColor: 'red',
    //     flex: 2,
    //     justifyContent: 'center',
    //     alignItems: 'center'
    //   }}
    //   >
    //     <Text>1</Text>
    //   </View>
    //   <View style={{
    //     backgroundColor: 'green',
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center'
    //   }}
    //   >
    //     <Text>2</Text>
    //   </View>
    //   <View style={{
    //     backgroundColor: 'blue',
    //     justifyContent: 'center',
    //     alignItems: 'center'
    //   }}
    //   >
    //     <Text>3</Text>
    //   </View>
    // </View>


    // Try setting `flexDirection` to `column`.
    // <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch' }}>
    //   <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
    //   <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
    //   <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
    // </View>

  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  /* inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    marginBottom: 10,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1
  }, */
  /* listItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  } */
});
