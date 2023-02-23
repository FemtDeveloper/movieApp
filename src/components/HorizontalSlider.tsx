import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {MoviePoster} from './MoviePoster';
import {Movie} from '../interfaces/moviesInterfaces';

interface Props {
  movies: Movie[];
  title?: string;
}

export const HorizontalSlider = ({movies, title}: Props) => {
  return (
    <View
      style={{
        height: title ? 260 : 220,
      }}>
      {title && (
        <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 10}}>
          {title}
        </Text>
      )}

      <FlatList
        renderItem={({item}) => (
          <MoviePoster movie={item} height={200} width={140} />
        )}
        data={movies}
        keyExtractor={item => item.id.toString()}
        horizontal
      />
    </View>
  );
};
