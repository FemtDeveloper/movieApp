import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DetailsScreen, HomeScreen} from '../screens/';

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator
      // initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
};
