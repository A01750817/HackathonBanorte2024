// App.js

import React, { useContext } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider, AuthContext } from './components/AuthContext.js';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppStack from './components/AppStack';
import AuthNavigator from './components/AuthNavigator';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        {/* Eliminar temporalmente ErrorBoundary */}
        <NavigationContainer>
          <StatusBar barStyle="light-content" backgroundColor="#EB0029" />
          <RootNavigator />
        </NavigationContainer>
      </AuthProvider>
    </GestureHandlerRootView>
  );
}

function RootNavigator() {
  const { user } = useContext(AuthContext);

  return user.authenticated ? <AppStack /> : <AuthNavigator />;
}
