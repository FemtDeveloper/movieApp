/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './src/navigation/Navigation';
import {GradientProvider} from './src/context/GradientContext';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <GradientProvider>
        <Navigation />
      </GradientProvider>
    </NavigationContainer>
  );
}

export default App;
