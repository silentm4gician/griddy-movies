import { getMovieResults, getTvResults } from "@/api/requests/requests";
import MovieGrid from "./MovieGrid";
import { motion } from "framer-motion";

const Results = async ({ query, type }) => {
  const { results: movieResults } = await getMovieResults(query);
  const { results: tvResults } = await getTvResults(query);

  const results = type === "movie" ? movieResults : tvResults;
  const noResultsMessage = `No ${
    type === "movie" ? "movies" : "TV shows"
  } found for "${query}"`;

  return (
    <div className="py-8">
      {results?.length > 0 ? (
        <MovieGrid media={results} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-semibold text-gray-300 mb-2">
            {noResultsMessage}
          </h3>
          <p className="text-gray-400">
            Try searching with different keywords or browse our categories
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default Results;