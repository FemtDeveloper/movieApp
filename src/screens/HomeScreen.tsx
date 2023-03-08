import React from 'react';
import {View, ActivityIndicator, Dimensions, ScrollView} from 'react-native';

import {useMovies} from '../hooks/useMovies';
import {MoviePoster} from '../components/MoviePoster';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import {HorizontalSlider} from '../components/HorizontalSlider';
import {GradientBackground} from '../components/GradientBackground';
import {getColores} from '../helpers/getColores';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {nowPlaying, upcoming, topRated, popular, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const [primary, secondary] = await getColores(uri);
    console.log({primary, secondary});
  };

  if (isLoading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size={100} color={'pink'} />
      </View>
    );
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{marginTop: top + 20}}>
          <View style={{height: 440}}>
            <Carousel
              renderItem={({item}) => <MoviePoster movie={item} />}
              data={nowPlaying}
              sliderWidth={windowWidth}
              itemWidth={300}
              inactiveSlideOpacity={0.8}
              onSnapToItem={getPosterColors}
            />
          </View>
          <HorizontalSlider movies={nowPlaying} title="En cines" />
          <HorizontalSlider movies={topRated} title="Top rated" />
          <HorizontalSlider movies={popular} title="Popular" />
          <HorizontalSlider movies={upcoming} title="Upcoming" />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};
