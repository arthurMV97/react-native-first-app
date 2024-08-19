import { useState } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

const TodoInput = ({ onSubmit }) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = () => {
    onSubmit(inputText);
    setInputText("");
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your todo list!"
        value={inputText}
        onChangeText={setInputText}
        onSubmitEditing={handleSubmit}
        blurOnSubmit={false}
      />
      <Button title="Add todo" onPress={handleSubmit} />
    </View>
  );
};
export default TodoInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    gap: 4,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
  },
});
