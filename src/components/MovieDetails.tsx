import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {MovieFull} from '../interfaces/moviesInterfaces';
import {Cast} from '../interfaces/CreditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import {CastItem} from './CastItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      <View style={{marginLeft: 20}}>
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
      <View style={{marginBottom: 100, marginTop: 10}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 10,
            marginLeft: 20,
          }}>
          Actores
        </Text>
        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CastItem actor={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollCast}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollCast: {
    marginTop: 10,
    height: 70,
  },
});
