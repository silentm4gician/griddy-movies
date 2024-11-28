import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const createApiRequest = (url, params = { language: "en-US" }) => ({
  method: "GET",
  url: `https://api.themoviedb.org/3${url}`,
  params,
  headers: {
    accept: "application/json",
    Authorization: API_KEY,
  },
});

export const getTrending = async () => {
  const options = createApiRequest("/trending/all/day");
  const res = await axios.request(options);
  return res.data;
};

export const getTrendingMovies = async () => {
  const options = createApiRequest("/movie/popular", { language: "en-US", page: "1" });
  const res = await axios.request(options);
  return res.data;
};

export const getTopRatedTvShows = async () => {
  const options = createApiRequest("/tv/top_rated", { language: "en-US", page: "1" });
  const res = await axios.request(options);
  return res.data;
};

export const getTopRatedMovies = async () => {
  const options = createApiRequest("/movie/top_rated", { language: "en-US", page: "1" });
  const res = await axios.request(options);
  return res.data;
};

export const getMovieInfo = async (movieId) => {
  const options = createApiRequest(`/movie/${movieId}`, { language: "en-US" });
  const res = await axios.request(options);
  return res.data;
};

export const getShowInfo = async (showId) => {
  const options = createApiRequest(`/tv/${showId}`, { language: "en-US" });
  const res = await axios.request(options);
  return res.data;
};

export const getSeasonInfo = async (showId, showSeason) => {
  const options = createApiRequest(`/tv/${showId}/season/${showSeason}`, { language: "en-US" });
  const res = await axios.request(options);
  return res.data;
};

export const getMovieResults = async (toSearch) => {
  const options = createApiRequest('/search/movie', { 
    query: toSearch, 
    include_adult: 'false', 
    language: 'en-US', 
    page: '1' 
  });
  const res = await axios.request(options);
  return res.data;
};

export const getTvResults = async (toSearch) => {
  const options = createApiRequest('/search/tv', { 
    query: toSearch, 
    include_adult: 'false', 
    language: 'en-US', 
    page: '1' 
  });
  const res = await axios.request(options);
  return res.data;
};