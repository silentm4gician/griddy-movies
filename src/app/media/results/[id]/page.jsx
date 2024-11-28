import { getMovieResults, getTvResults } from "@/api/requests/requests";
import ResultsClient from "@/components/ResultsClient";

const ResultsPage = async ({ params }) => {
  const { results: movieResults } = await getMovieResults(params.id);
  const { results: tvResults } = await getTvResults(params.id);

  return <ResultsClient 
    params={params} 
    initialMovieResults={movieResults} 
    initialTvResults={tvResults} 
  />;
};

export default ResultsPage;