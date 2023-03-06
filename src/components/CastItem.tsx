import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Cast} from '../interfaces/CreditsInterface';

interface Props {
  actor: Cast;
}

export const CastItem = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
  return (
    <View style={styles.container}>
      <Image source={{uri}} style={styles.image} />
      <View style={styles.actorInfo}>
        <Text style={styles.actor}>{actor.name}</Text>
        <Text style={styles.character}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    heigth: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.84,
    elevation: 9,
    marginHorizontal: 20,
    paddingRight: 10,
    marginBottom: 10,
  },
  actor: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  character: {fontSize: 16, opacity: 0.7},
  image: {
    height: 50,
    width: 50,
    borderRadius: 10,
  },
  actorInfo: {
    marginLeft: 10,
    padding: 0,
  },
});
