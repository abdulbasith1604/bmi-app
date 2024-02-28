import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import bmilogo from './assets/logo.png';

export default function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');

  function calculate() {
    if (height && weight) {
      const bmiValue = (weight / (height * height)) * 10000;
      setBmi(bmiValue.toFixed(2));
    }
  }

  return (
    <View style={styles.container}>
      <Image source={bmilogo} style={styles.logo} />
      <TextInput
        style={styles.inputField}
        onChangeText={text => setHeight(text)}
        value={height}
        placeholder='Height in cm'
        keyboardType='numeric'
      />
      <TextInput
        style={styles.inputField}
        onChangeText={text => setWeight(text)}
        value={weight}
        placeholder='Weight in kg'
        keyboardType='numeric'
      />
      <TouchableOpacity
        style={styles.calculateButton}
        onPress={calculate}
      >
        <Text style={styles.buttonText}>Calculate BMI</Text>
      </TouchableOpacity>
      {
        bmi !== '' &&
        <Text style={styles.resultText}>Your BMI Value is: {bmi}</Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'aqua', // Background color of the container
  },
  logo: {
    marginBottom: 20,
  },
  calculateButton: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  inputField: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  resultText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2ecc71',
  },
});
