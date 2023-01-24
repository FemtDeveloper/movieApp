import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {useMovies} from '../hooks/useMovies';
import {MoviePoster} from '../components/MoviePoster';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const HomeScreen = () => {
  const {nowPlaying, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size={100} color={'pink'} />
      </View>
    );
  }

  return (
    <View style={{marginTop: top + 20}}>
      <MoviePoster movie={nowPlaying[0]} />
    </View>
  );
};
