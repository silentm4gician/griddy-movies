import { getTrendingMovies, getTopRatedTvShows } from '@/api/requests/requests';

export default async function sitemap() {
  const baseUrl = 'https://griddy-movies.site';

  // Get dynamic movie and show data
  const [{ results: movies }, { results: shows }] = await Promise.all([
    getTrendingMovies(),
    getTopRatedTvShows(),
  ]);

  // Static routes
  const routes = [
    '',
    '/media/trending',
    '/media/movies',
    '/media/shows',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily',
    priority: 1.0,
  }));

  // Dynamic movie routes
  const movieUrls = movies.map((movie) => ({
    url: `${baseUrl}/media/player/movie/${movie.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Dynamic show routes
  const showUrls = shows.map((show) => ({
    url: `${baseUrl}/media/player/show/${show.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...routes, ...movieUrls, ...showUrls];
}
