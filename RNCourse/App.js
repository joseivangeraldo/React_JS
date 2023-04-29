import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>

      <View style={styles.inputContainer}>
        <TextInput placeholder='Your Goals' />
        <Button title='Add Goal' />
      </View>
      <Text>List of Goals</Text>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 70,
  },
  inputContainer: {
    flexDiretion: 'row',
    JustifyContent: 'space-between'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%'
  }
});
