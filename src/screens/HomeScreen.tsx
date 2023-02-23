import React from 'react';
import {View, ActivityIndicator, Dimensions, ScrollView} from 'react-native';
import {useMovies} from '../hooks/useMovies';
import {MoviePoster} from '../components/MoviePoster';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import {HorizontalSlider} from '../components/HorizontalSlider';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {nowPlaying, upcoming, topRated, popular, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size={100} color={'pink'} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        <View style={{height: 440}}>
          <Carousel
            renderItem={({item}) => <MoviePoster movie={item} />}
            data={nowPlaying}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.8}
          />
        </View>
        <HorizontalSlider movies={nowPlaying} title="En cines" />
        <HorizontalSlider movies={topRated} title="Top rated" />
        <HorizontalSlider movies={popular} title="Popular" />
        <HorizontalSlider movies={upcoming} title="Upcoming" />
      </View>
    </ScrollView>
  );
};
