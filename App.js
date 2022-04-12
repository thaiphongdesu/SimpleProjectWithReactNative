import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.header}>Registration</Text>

      <TextInput style = {styles.textInput} placeholder = "Your name" underlineColorAndroid = {'transparent'}></TextInput>
      <TextInput style = {styles.textInput} placeholder = "Your email" underlineColorAndroid = {'transparent'}></TextInput>
      <TextInput style = {styles.textInput} placeholder = "Your password" secureTextEntry = {true} underlineColorAndroid = {'transparent'}></TextInput>

      <TouchableOpacity style = {styles.button}>
        <Text style = {styles.btnText}>Sign up</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 60,
    paddingRight: 60,
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  header: {
    fontSize: 24,
    color: '#fff',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
  },
  textInput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: "#fff",
    borderBottomColor: "#f8f8f8",
    borderBottomWidth: 1
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: "#42f59e",
    marginTop: 30,
    borderRadius: 5
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
