import { getTopRatedMovies } from "@/api/requests/requests";
import Card from "@/components/Card";

const MoviesPage = async () => {
  const { page, results } = await getTopRatedMovies();

  return (
    <section className="bg-slate-800">
      <div className="cardgrid">
        {results?.map((media) => (
          <Card media={media} key={media.id} />
        ))}
      </div>
    </section>
  );
};

export default MoviesPage;
