import axios from 'axios';
import { unstable_cache } from 'next/cache';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const createApiRequest = (url, params = { language: 'en-US' }) => ({
  method: 'GET',
  url: `${BASE_URL}${url}`,
  params,
  headers: {
    accept: 'application/json',
    Authorization: API_KEY,
  },
});

export const getTrending = unstable_cache(
  async (page = 1) => {
    const options = createApiRequest('/trending/all/day', {
      language: 'en-US',
      page: page.toString(),
    });
    const res = await axios.request(options);
    return res.data;
  },
  ['trending'],
  {
    revalidate: 86400, // 24 hours in seconds
    tags: ['trending']
  }
);

export const getTrendingMovies = unstable_cache(
  async (page = 1) => {
    const options = createApiRequest('/movie/popular', {
      language: 'en-US',
      page: page.toString(),
    });
    const res = await axios.request(options);
    return res.data;
  },
  ['trending-movies'],
  {
    revalidate: 86400, // 24 hours in seconds
    tags: ['trending-movies']
  }
);

export const getTopRatedTvShows = unstable_cache(
  async (page = 1) => {
    const options = createApiRequest('/tv/top_rated', {
      language: 'en-US',
      page: page.toString(),
    });
    const res = await axios.request(options);
    return res.data;
  },
  ['top-rated-tv-shows'],
  {
    revalidate: 86400, // 24 hours in seconds
    tags: ['top-rated-tv-shows']
  }
);

export const getTopRatedMovies = unstable_cache(
  async (page = 1) => {
    const options = createApiRequest('/movie/top_rated', {
      language: 'en-US',
      page: page.toString(),
    });
    const res = await axios.request(options);
    return res.data;
  },
  ['top-rated-movies'],
  {
    revalidate: 86400, // 24 hours in seconds
    tags: ['top-rated-movies']
  }
);

export const getMovieInfo = unstable_cache(
  async (movieId) => {
    const options = createApiRequest(`/movie/${movieId}`, { 
      language: 'en-US',
      append_to_response: 'credits,recommendations'
    });
    const res = await axios.request(options);
    return res.data;
  },
  ['movie-info'],
  {
    revalidate: 86400, // 24 hours in seconds
    tags: ['movie-info']
  }
);

export const getShowInfo = unstable_cache(
  async (showId) => {
    const options = createApiRequest(`/tv/${showId}`, {
      append_to_response: 'credits,recommendations',
    });

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error('Error fetching show info:', error);
      throw new Error('Failed to fetch show data');
    }
  },
  ['show-info'],
  {
    revalidate: 3600,
    tags: ['show-info'],
  }
);

// Server-side cached version
export const getSeasonInfo = unstable_cache(
  async (showId, showSeason) => {
    const options = createApiRequest(`/tv/${showId}/season/${showSeason}`, {
      language: 'en-US',
    });
    const res = await axios.request(options);
    return res.data;
  },
  ['season-info'],
  {
    revalidate: 3600,
    tags: ['season-info'],
  }
);

// Client-side version without cache
export const getSeasonInfoClient = async (showId, showSeason) => {
  const options = createApiRequest(`/tv/${showId}/season/${showSeason}`, {
    language: 'en-US',
  });
  const res = await axios.request(options);
  return res.data;
};

export const getMovieResults = unstable_cache(
  async (toSearch, page = 1) => {
    const options = createApiRequest('/search/movie', {
      query: toSearch,
      include_adult: 'false',
      language: 'en-US',
      page: page.toString(),
    });
    const res = await axios.request(options);
    return res.data;
  },
  ['movie-results'],
  {
    revalidate: 86400, // 24 hours in seconds
    tags: ['movie-results']
  }
);

export const getTvResults = unstable_cache(
  async (toSearch, page = 1) => {
    const options = createApiRequest('/search/tv', {
      query: toSearch,
      include_adult: 'false',
      language: 'en-US',
      page: page.toString(),
    });
    const res = await axios.request(options);
    return res.data;
  },
  ['tv-results'],
  {
    revalidate: 86400, // 24 hours in seconds
    tags: ['tv-results']
  }
);

export const getMovieGenres = unstable_cache(
  async () => {
    const options = createApiRequest('/genre/movie/list', { language: 'en-US' });
    const res = await axios.request(options);
    return res.data;
  },
  ['movie-genres'],
  {
    revalidate: 86400, // 24 hours in seconds
    tags: ['movie-genres']
  }
);

export const getTvGenres = unstable_cache(
  async () => {
    const options = createApiRequest('/genre/tv/list', { language: 'en-US' });
    const res = await axios.request(options);
    return res.data;
  },
  ['tv-genres'],
  {
    revalidate: 86400, // 24 hours in seconds
    tags: ['tv-genres']
  }
);

export const getMoviesByGenre = unstable_cache(
  async (genreId, page = 1) => {
    const options = createApiRequest('/discover/movie', {
      language: 'en-US',
      sort_by: 'popularity.desc',
      with_genres: genreId,
      page: page.toString(),
    });
    const res = await axios.request(options);
    return res.data;
  },
  ['movies-by-genre'],
  {
    revalidate: 86400, // 24 hours in seconds
    tags: ['movies-by-genre']
  }
);

export const getTvShowsByGenre = unstable_cache(
  async (genreId, page = 1) => {
    const options = createApiRequest('/discover/tv', {
      language: 'en-US',
      sort_by: 'popularity.desc',
      with_genres: genreId,
      page: page.toString(),
    });
    const res = await axios.request(options);
    return res.data;
  },
  ['tv-shows-by-genre'],
  {
    revalidate: 86400, // 24 hours in seconds
    tags: ['tv-shows-by-genre']
  }
);

export const getActorInfo = unstable_cache(
  async (actorId) => {
    const options = createApiRequest(`/person/${actorId}`, {
      append_to_response: 'combined_credits,external_ids',
    });

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error('Error fetching actor info:', error);
      throw new Error('Failed to fetch actor data');
    }
  },
  ['actor-info'],
  {
    revalidate: 3600,
    tags: ['actor-info'],
  }
);
