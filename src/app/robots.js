export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/media/movies', '/media/shows', '/media/trending'],
        disallow: [
          '/api/',
          '/_next/',
          '/media/player/movie/*?unauthorized',
          '/media/player/show/*?unauthorized',
        ],
      },
    ],
    sitemap: 'https://www.griddy-movies.site/sitemap.xml',
  };
}
