import { View, Text, StyleSheet, StatusBar, FlatList } from 'react-native';
import Buttons from './Buttons';
import React, { useState } from 'react';
export default function AddCalCulator() {
  const [num1Value, setnum1Value] = React.useState('');
  const [operator, setOperator] = React.useState('');
  const [num2Value, setnum2Value] = React.useState('');
  const [result, setResult] = React.useState('');

  const keys = [
    'C',
    '%',
    'X',
    '/',
    '7',
    '8',
    '9',
    '*',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '00',
    '0',
    '.',
    '=',
  ];
  const handlePress = value => {
    if (!isNaN(value) || value === '.' || value === '0') {
      handleNumberInput(value);
    } else if (value === 'C') {
      clearAll();
    } else if (value === 'X') {
      BackSpace();
    } else if (value === '=') {
      handleCalculation();
    } else {
      handleOperatorInput(value);
    }
  };
  function handleNumberInput(val) {
    if (operator === '') {
      setnum1Value(num1Value + val);
    } else {
      setnum2Value(num2Value + val);
    }
  }
  function clearAll() {
    setnum1Value('');
    setOperator('');
    setnum2Value('');
    setResult('');
  }
  function BackSpace() {
    if (num2Value !== '') {
      setnum2Value(num2Value.slice(0, -1));
    } else if (operator !== '') {
      setOperator('');
    } else {
      setnum1Value(num1Value.slice(0, -1));
    }
  }
  function handleCalculation() {
    let n1 = parseFloat(num1Value);
    let n2 = parseFloat(num2Value);
    let ans = 0;
    switch (operator) {
      case '+':
        ans = n1 + n2;
        break;
      case '-':
        ans = n1 - n2;
        break;
      case '*':
        ans = n1 * n2;
        break;
      case '/':
        ans = n1 / n2;
        break;
      case '%':
        ans = n1 % n2;
        break;
      default:
        return;
    }
    setResult(ans);
  }
  function handleOperatorInput(o) {
    if (num1Value !== '') {
      setOperator(o);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" />
      <View style={styles.display}>
        <Text style={{ color: 'white', fontSize: 30, fontWeight: 300 }}>
          {num1Value + operator + num2Value}
        </Text>
        <Text style={{ color: 'white', fontSize: 40, fontWeight: 300 }}>
          {result}
        </Text>
      </View>
      <View style={styles.keypad}>
        <FlatList
          data={keys}
          numColumns={4}
          keyExtractor={i => i.toString()}
          renderItem={({ item }) => (
            <Buttons
              title={item}
              type={
                isNaN(item) && item != '.' && item != '00'
                  ? 'operator'
                  : 'number'
              }
              onPress={() => handlePress(item)}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white',
    backgroundColor: 'black',
    padding: 5,
  },
  display: {
    flex: 1,

    paddingHorizontal: 40,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  keypad: {
    flex: 2,
    // flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,

    // paddingHorizontal: 10,
    // paddingVertical: 10,
  },
  text: {
    color: 'white',
    fontSize: 40,
  },
});
