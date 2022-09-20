import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [goals, setGoals] = useState<{ text: string, id: string }[]>([]);
  const [modalVisibility, setModalVisibility] = useState<boolean>(false);

  const addGoal = (enteredGoalText: string) => {
    if (enteredGoalText) {
      const myGoal = { text: enteredGoalText, id: Math.random().toString() }
      setGoals((currentGoals) => [...currentGoals, myGoal]);
      setModalVisibility(false);
    }
  }

  const deleteGoal = (id: string) => {
    setGoals(currentGoals => currentGoals.filter((goal) => goal.id !== id));
  }

  const showModal = () => {
    setModalVisibility(true);
  }

  const hideModal = () => {
    setModalVisibility(false);
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>

        <Button title='Add New Goal' color={'#a065ec'} onPress={showModal}></Button>
        <GoalInput addGoal={addGoal} closeModal={hideModal} modalVisibility={modalVisibility} />

        <View style={styles.goalsContainer}>
          <FlatList data={goals} alwaysBounceVertical={false} renderItem={(goal) => {
            return (
              <GoalItem text={goal.item.text} id={goal.item.id} deleteGoal={deleteGoal} />
            )
          }}
            keyExtractor={(item, index) => item.id}
          >
          </FlatList>
        </View>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a'
  },
  goalsContainer: {
    flex: 5
  },
});