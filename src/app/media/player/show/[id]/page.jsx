import { getShowInfo } from "@/api/requests/requests";
import ShowPlayerClient from "@/components/ShowPlayerClient";

const ShowPlayer = async ({ params }) => {
  const showInfo = await getShowInfo(params.id);
  return <ShowPlayerClient showInfo={showInfo} />;
};

export default ShowPlayer;