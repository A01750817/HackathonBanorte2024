// components/CoinPathStack.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CoinPath from './CoinPath';
import QAProblems from './QAProblems';

const Stack = createStackNavigator();

/**
 * Componente funcional CoinPathStack
 * Maneja la navegación entre CoinPath y QAProblems.
 */
export default function CoinPathStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CoinPath" component={CoinPath} />
      <Stack.Screen name="QAProblems" component={QAProblems} />
    </Stack.Navigator>
  );
}
