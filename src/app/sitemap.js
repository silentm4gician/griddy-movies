// app/sitemap.ts
import {
  getTrendingMovies,
  getTopRatedTvShows,
  getMovieGenres,
  getTvGenres,
} from '@/api/requests/requests';

export default async function sitemap() {
  const baseUrl = 'https://www.griddy-movies.site';
  const currentDate = new Date().toISOString();

  // Obtener datos dinámicos
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

  // Rutas principales
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
      changeFrequency: 'daily',
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

  // Páginas de géneros
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

  // Películas destacadas (limitar a 500)
  const featuredMovieUrls = movies.slice(0, 500).map((movie) => ({
    url: `${baseUrl}/media/player/movie/${movie.id}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  // Series destacadas (limitar a 500)
  const featuredShowUrls = shows.slice(0, 500).map((show) => ({
    url: `${baseUrl}/media/player/show/${show.id}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  return [
    ...routes,
    ...movieGenreUrls,
    ...tvGenreUrls,
    ...featuredMovieUrls,
    ...featuredShowUrls,
  ];
}
