import React from 'react';
import {Animated, Button, View} from 'react-native';
import {useFade} from '../hooks/useFade';

export const FadeScreen = () => {
  const {fadeIn, fadeOut, opacity} = useFade();

  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'grey',
        alignItems: 'center',
      }}>
      <Animated.View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          backgroundColor: '#084f6a',
          width: 150,
          height: 150,
          borderWidth: 10,
          borderColor: 'white',
          opacity,
          marginBottom: 10,
        }}
      />

      <Button title="FadeIn" onPress={() => fadeIn()} />
      <Button title="FadeOut" onPress={() => fadeOut()} />
    </View>
  );
};
