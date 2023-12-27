import { getShowInfo } from "@/api/requests/requests";
import HandleSeasons from "@/components/HandleSeasons";

const ShowPlayer = async ({ params }) => {
  const showInfo = await getShowInfo(params.id);

  // src={`https://vidsrc.xyz/embed/tv?tmdb=${params.id}`}

  return (
    <div className="text-white h-[calc(100vh-7rem)]">
      <h1 className="text-xl font-bold text-center mt-4">{showInfo.name}</h1>

      <div className="flex mt-4 flex-col items-center">
        <p className="text-lg mx-40">{showInfo.overview}</p>
        <HandleSeasons show={showInfo} />
      </div>
    </div>
  );
};

export default ShowPlayer;
