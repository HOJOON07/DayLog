import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import RootStack from './screens/RootStack';
import LogContext, {LogContextProvider} from './contexts/LogContext';

export default function App() {
  return (
    <NavigationContainer>
      <LogContextProvider>
        <RootStack></RootStack>
      </LogContextProvider>
    </NavigationContainer>
  );
}
