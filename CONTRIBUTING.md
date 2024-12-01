# Contributing to Griddy Movies

First off, thank you for considering contributing to Griddy Movies! It's people like you that make Griddy Movies such a great tool.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Project Structure](#project-structure)
- [Development Setup](#development-setup)
- [Making Changes](#making-changes)
- [Coding Standards](#coding-standards)
- [Pull Request Process](#pull-request-process)
- [Environment Variables](#environment-variables)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to vfourcode@gmail.com.

## Project Structure

```
griddy-movies/
├── src/
│   ├── api/                    # API related code
│   │   └── requests/          # API request functions
│   ├── app/                    # Next.js app directory
│   │   ├── contact/           # Contact page
│   │   ├── media/             # Media pages (movies, shows, player)
│   │   └── page.jsx           # Home page
│   └── components/            # React components
│       ├── Footer/            # Footer components
│       ├── Card.jsx           # Movie/Show card component
│       ├── HeroSection.jsx    # Homepage hero section
│       ├── MovieGrid.jsx      # Grid layout for movies/shows
│       └── ...                # Other components
├── public/                    # Static files
├── .env                       # Environment variables
└── tailwind.config.js        # Tailwind CSS configuration
```

## Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/griddy-movies.git
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env.local` file based on `.env.local_sample`:
   ```
   NEXT_PUBLIC_API_KEY=your_tmdb_api_key
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

## Making Changes

1. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Make your changes
3. Test your changes
4. Commit your changes:
   ```bash
   git commit -m "feat: add new feature"
   ```

## Coding Standards

- Use JSX for new components
- Follow the existing code style
- Use meaningful variable and function names
- Write comments for complex logic
- Keep components small and focused
- Use proper component organization:
  ```jsx
  // Component structure
  import statements
  type definitions
  component function
  helper functions
  styles (if any)
  export
  ```

### Component Guidelines

- Use functional components with hooks
- Implement proper error handling
- Add loading states
- Make components responsive
- Follow accessibility best practices

### Naming Conventions

- Components: PascalCase (e.g., `MovieCard.jsx`)
- Files: kebab-case (e.g., `api-utils.js`)
- Functions: camelCase (e.g., `fetchMovieData`)
- CSS classes: kebab-case (e.g., `movie-card`)

## Pull Request Process

1. Update the README.md with details of changes if needed
2. Update the documentation if you're changing functionality
3. The PR must pass all checks and have no conflicts
4. Get at least one code review from a maintainer
5. Follow the PR template provided

## Environment Variables

Required environment variables:

```env
NEXT_PUBLIC_API_KEY=           # TMDB API key
NEXT_PUBLIC_GA_ID=             # Google Analytics ID (optional)
```

## API Integration

The project uses TMDB API for movie and TV show data. When working with the API:

1. Use the existing request functions in `src/api/requests`
2. Follow rate limiting guidelines
3. Handle errors appropriately
4. Cache responses when possible

## Testing

- Write tests for new features
- Update existing tests when modifying features
- Run the test suite before submitting PR:
  ```bash
  npm run test
  ```

## Documentation

- Document new features
- Update existing documentation when making changes
- Use JSDoc for function documentation:
  ```javascript
  /**
   * Fetches movie data from the API
   * @param {string} id - Movie ID
   * @returns {Promise<MovieData>} Movie information
   */
  ```

## Deployment

The project is deployed on Vercel. Make sure your changes:

- Pass all build checks
- Are optimized for production
- Don't break existing functionality
- Follow security best practices

## Need Help?

Feel free to:

- Open an issue for bugs
- Start a discussion for features
- Contact maintainers for guidance

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
