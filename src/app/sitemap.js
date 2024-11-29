import {
  getTrendingMovies,
  getTopRatedTvShows,
  getMovieGenres,
  getTvGenres,
} from '@/api/requests/requests';

export default async function sitemap() {
  const baseUrl = 'https://griddy-movies.site';
  const currentDate = new Date().toISOString();

  // Get dynamic data
  const [
    { results: movies },
    { results: shows },
    { genres: movieGenres },
    { genres: tvGenres },
  ] = await Promise.all([
    getTrendingMovies(),
    getTopRatedTvShows(),
    getMovieGenres(),
    getTvGenres(),
  ]);

  // Core routes
  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/media/trending`,
      lastModified: currentDate,
      changeFrequency: 'hourly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/media/movies`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/media/shows`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  // Genre pages
  const movieGenreUrls = movieGenres.map((genre) => ({
    url: `${baseUrl}/media/movies?genre=${genre.id}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const tvGenreUrls = tvGenres.map((genre) => ({
    url: `${baseUrl}/media/shows?genre=${genre.id}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Movie and show pages
  const movieUrls = movies.map((movie) => ({
    url: `${baseUrl}/media/player/movie/${movie.id}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.6,
    images: [
      {
        url: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
        title: movie.title,
      },
    ],
  }));

  const showUrls = shows.map((show) => ({
    url: `${baseUrl}/media/player/show/${show.id}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.6,
    images: [
      {
        url: `https://image.tmdb.org/t/p/original${show.backdrop_path}`,
        title: show.name,
      },
    ],
  }));

  return [
    ...routes,
    ...movieGenreUrls,
    ...tvGenreUrls,
    ...movieUrls,
    ...showUrls,
  ];
}
