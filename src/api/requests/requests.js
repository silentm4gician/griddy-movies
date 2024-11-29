import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const createApiRequest = (url, params = { language: 'en-US' }) => ({
  method: 'GET',
  url: `https://api.themoviedb.org/3${url}`,
  params,
  headers: {
    accept: 'application/json',
    Authorization: API_KEY,
  },
});

export const getTrending = async (page = 1) => {
  const options = createApiRequest('/trending/all/day', {
    language: 'en-US',
    page: page.toString(),
  });
  const res = await axios.request(options);
  return res.data;
};

export const getTrendingMovies = async (page = 1) => {
  const options = createApiRequest('/movie/popular', {
    language: 'en-US',
    page: page.toString(),
  });
  const res = await axios.request(options);
  return res.data;
};

export const getTopRatedTvShows = async (page = 1) => {
  const options = createApiRequest('/tv/top_rated', {
    language: 'en-US',
    page: page.toString(),
  });
  const res = await axios.request(options);
  return res.data;
};

export const getTopRatedMovies = async (page = 1) => {
  const options = createApiRequest('/movie/top_rated', {
    language: 'en-US',
    page: page.toString(),
  });
  const res = await axios.request(options);
  return res.data;
};

export const getMovieInfo = async (movieId) => {
  const options = createApiRequest(`/movie/${movieId}`, { language: 'en-US' });
  const res = await axios.request(options);
  return res.data;
};

export const getShowInfo = async (showId) => {
  const options = createApiRequest(`/tv/${showId}`, { language: 'en-US' });
  const res = await axios.request(options);
  return res.data;
};

export const getSeasonInfo = async (showId, showSeason) => {
  const options = createApiRequest(`/tv/${showId}/season/${showSeason}`, {
    language: 'en-US',
  });
  const res = await axios.request(options);
  return res.data;
};

export const getMovieResults = async (toSearch, page = 1) => {
  const options = createApiRequest('/search/movie', {
    query: toSearch,
    include_adult: 'false',
    language: 'en-US',
    page: page.toString(),
  });
  const res = await axios.request(options);
  return res.data;
};

export const getTvResults = async (toSearch, page = 1) => {
  const options = createApiRequest('/search/tv', {
    query: toSearch,
    include_adult: 'false',
    language: 'en-US',
    page: page.toString(),
  });
  const res = await axios.request(options);
  return res.data;
};

export const getMovieGenres = async () => {
  const options = createApiRequest('/genre/movie/list', { language: 'en-US' });
  const res = await axios.request(options);
  return res.data;
};

export const getTvGenres = async () => {
  const options = createApiRequest('/genre/tv/list', { language: 'en-US' });
  const res = await axios.request(options);
  return res.data;
};

export const getMoviesByGenre = async (genreId, page = 1) => {
  const options = createApiRequest('/discover/movie', {
    language: 'en-US',
    sort_by: 'popularity.desc',
    with_genres: genreId,
    page: page.toString(),
  });
  const res = await axios.request(options);
  return res.data;
};

export const getTvShowsByGenre = async (genreId, page = 1) => {
  const options = createApiRequest('/discover/tv', {
    language: 'en-US',
    sort_by: 'popularity.desc',
    with_genres: genreId,
    page: page.toString(),
  });
  const res = await axios.request(options);
  return res.data;
};
