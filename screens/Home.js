import { StyleSheet, ScrollView, View, TextInput } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { color } from '../styles/color';
// import TodoItem from '../components/TodoItem';
// import { useEffect, useState } from 'react';
// import ToDo from '../models/ToDo.model';


export default function HomePage() {


  return (
    <View style={styles.container}>
      {/* <TextInput
        style={styles.input}
        placeholder="Add a To Do"
        returnKeyType="done"
        value={text}
        onChangeText={e => setText(e)}
        onSubmitEditing={addTodo}
      /> */}
      <ScrollView>
        {/* [...Array(6)] */}
        {/* {todos.map((todo, i) => (
          <TodoItem key={i} i={i}
            text={todo.text}
            completed={todo.completed}
            completedTodo={() => completedTodo(i)}
          />
        ))} */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#e5e5e5",
    // paddingTop: 20,
    // paddingHorizontal: 20,
  },
  // input: {
  //   backgroundColor: "white",
  //   marginBottom: 20,
  //   paddingHorizontal: 12,
  //   paddingVertical: 18,
  // },
})