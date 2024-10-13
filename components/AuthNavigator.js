// components/AuthNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginRegister from './LoginRegister'; // Asegúrate de que este componente exista y esté correctamente exportado

const Stack = createStackNavigator();

/**
 * Componente funcional AuthNavigator
 * Maneja la navegación para las pantallas de autenticación (Login, Registro, etc.).
 */
export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Definir una pantalla en el Stack Navigator */}
      <Stack.Screen name="Login" component={LoginRegister} />
      {/* Agrega más pantallas de autenticación aquí si las tienes */}
      
    </Stack.Navigator>
  );
}
