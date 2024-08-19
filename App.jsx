import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";

export default function App() {
  const [todos, setTodos] = useState([]);

  const handleAddtodo = (text) => {
    setTodos((currentTodos) => [
      ...currentTodos,
      { text, id: text + Math.random() },
    ]);
  };

  const deleteTodoHandler = (id) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  };
  return (
    <View style={styles.appContainer}>
      <TodoInput onSubmit={handleAddtodo} />

      <View style={styles.todosContainer}>
        <Text>List of todos:</Text>
        <FlatList
          alwaysBounceHorizontal={false}
          data={todos}
          renderItem={({ item }) => (
            <TodoItem
              text={item.text}
              onDelete={() => deleteTodoHandler(item.id)}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },

  todosContainer: { flex: 4, borderColor: "red" },
  todos: {
    margin: 10,
  },
});
