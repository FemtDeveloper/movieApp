import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBResponse} from '../interfaces/moviesInterfaces';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  // const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const getMovies = async () => {
    const nowPlaying = await movieDB.get<MovieDBResponse>('/now_playing');
    const popular = await movieDB.get<MovieDBResponse>('/popular');
    const topRated = await movieDB.get<MovieDBResponse>('/top_rated');
    const upcoming = await movieDB.get<MovieDBResponse>('/upcoming');

    const resps = await Promise.all([nowPlaying, popular, topRated, upcoming]);

    setMoviesState({
      nowPlaying: resps[0].data.results,
      popular: resps[1].data.results,
      topRated: resps[2].data.results,
      upcoming: resps[3].data.results,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return {...moviesState, isLoading};
};
