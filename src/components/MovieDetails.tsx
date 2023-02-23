import React from 'react';
import {View, Text} from 'react-native';
import {MovieFull} from '../interfaces/moviesInterfaces';
import {Cast} from '../interfaces/CreditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      <View>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" size={17} color={'grey'} />
          <Text> {movieFull.vote_average}</Text>
          <Text style={{marginLeft: 5}}>
            {' '}
            - {movieFull.genres.map(g => g.name).join(', ')}
          </Text>
        </View>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 10}}>
          Historia
        </Text>
        <Text style={{fontSize: 16}}>{movieFull.overview}</Text>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 10}}>
          Presupuesto
        </Text>
        <Text style={{fontSize: 16}}>
          {new Intl.NumberFormat('en-EN', {
            style: 'currency',
            currency: 'USD',
          }).format(movieFull.budget)}
        </Text>
      </View>
    </>
  );
};
