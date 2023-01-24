import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    language: 'es-ES',
    api_key: 'd9bd2117a942d1f425967c4bae46faf7',
  },
});

export default movieDB;
