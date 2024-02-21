import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput,TouchableOpacity} from 'react-native';
import { useState } from 'react';
export default function App() {
  const [height,setHeight]=useState('');
  const [weight,setWeight]=useState('');
  const [bmi,setBmi]=useState('');
  function calculate(){
    setBmi((weight/(height*height))*10000);
  }
  console.log(weight)
  return (
    <View style={styles.container}>
      <TextInput onChange={(e)=>{
        const targetval=e.target.value;
        setHeight(targetval);
        }} value= {height}placeholder='Enter Your Height' keyboardType='numeric'></TextInput>
      <TextInput onChange={(e)=>{
        const targetval=e.target.value;
        setWeight(targetval);
      }} value={weight} placeholder='Enter Your Weight' keyboardType='numeric'></TextInput>
      <TouchableOpacity 
      style={styles.calculateButton}
      onPress={calculate}>Submit</TouchableOpacity>
      {
        bmi!== '' &&
        <Text style={styles.text}>Your BMI Value is:{bmi}</Text>
      }
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  calculateButton: {
    backgroundColor: 'grey',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  inputField: {
    width: 100,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  text:{
    color:'red',
  }
})