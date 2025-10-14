import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Index() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi primera App Contador 🎯</Text>
      <Text style={styles.counter}>{count}</Text>

      {count >= 10 && <Text style={styles.celebration}>🎉 ¡Meta alcanzada!</Text>}

      <View style={styles.buttons}>
        <View style={styles.button}><Button title="+" onPress={increment} /></View>
        <View style={styles.button}><Button title="-" onPress={decrement} /></View>
        <View style={styles.button}><Button title="Reset" color="red" onPress={reset} /></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  counter: {
    fontSize: 60,
    marginBottom: 10,
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    marginHorizontal: 10,
  },
  celebration: {
    color: 'green',
    fontSize: 18,
    marginTop: 10,
  },
});
