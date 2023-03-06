import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const GradientBackground = ({children}: Props) => {
  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={['#084f6A', '#75CEDB', 'white']}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 0, y: 0}}
        end={{x: 0.5, y: 0.8}}
      />
      {children}
    </View>
  );
};
