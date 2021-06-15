import 'react-native-gesture-handler';

import { registerRootComponent } from 'expo';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import { AuthProvider } from './hooks/useAuth';

function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}

export default registerRootComponent(App);
