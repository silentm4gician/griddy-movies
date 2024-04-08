import { getTopRatedMovies } from "@/api/requests/requests";
import Card from "@/components/Card";

const MoviesPage = async () => {
  const { page, results } = await getTopRatedMovies();

  return (
    <section className="bg-slate-800">
      <h2 className="text-white text-2xl italic text-center mb-2">MOVIES</h2>
      <hr className="mx-[20%] mb-2"/>
      <div className="cardgrid">
        {results?.map((media) => (
          <Card media={media} key={media.id} />
        ))}
      </div>
    </section>
  );
};

export default MoviesPage;
