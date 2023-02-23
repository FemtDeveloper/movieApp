import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DetailsScreen, HomeScreen} from '../screens/';
import {Movie} from '../interfaces/moviesInterfaces';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailsScreen: Movie;
};

const Stack = createStackNavigator<RootStackParams>();

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
