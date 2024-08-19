import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const TodoItem = ({ text, onDelete }) => {
  return (
    <View style={styles.todo}>
      <Pressable
        onPress={onDelete}
        android_ripple={{ color: "#7677a0" }}
        style={({ pressed }) => pressed && styles.iosPressedTodo}
      >
        <Text style={styles.todoText}>{text} </Text>
      </Pressable>
    </View>
  );
};

export default TodoItem;
const styles = StyleSheet.create({
  todo: {
    margin: 10,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 4,
    backgroundColor: "#c3c4eb",
  },
  todoText: { color: "blue", padding: 4 },
  iosPressedTodo: {
    backgroundColor: "#7677a0",
  },
});
