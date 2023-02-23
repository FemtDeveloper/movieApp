import {useEffect, useState} from 'react';
import {MovieFull} from '../interfaces/moviesInterfaces';
import movieDB from '../api/movieDB';
import {CreditsReponse, Cast} from '../interfaces/CreditsInterface';

interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const movieDetailsPromise = movieDB.get<MovieFull>(`/${movieId}`);
    const castPromise = movieDB.get<CreditsReponse>(`/${movieId}/credits`);

    const [movieDeatailsResponse, castResponse] = await Promise.all([
      movieDetailsPromise,
      castPromise,
    ]);

    setState({
      isLoading: false,
      movieFull: movieDeatailsResponse.data,
      cast: castResponse.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    ...state,
  };
};
