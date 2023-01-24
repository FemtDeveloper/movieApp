import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Movie} from '../interfaces/moviesInterfaces';

interface Props {
  movie: Movie;
}

export const MoviePoster = ({movie}: Props) => {
  console.log({movie});

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <View>
      <Image source={{uri}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({image: {height: 150, width: 100}});
