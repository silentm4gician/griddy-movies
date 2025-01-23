import { getActorInfo } from '@/api/requests/requests';
import ActorClient from './ActorClient';

export default async function ActorPage({ params }) {
  const actorInfo = await getActorInfo(params.id);

  return <ActorClient actorInfo={actorInfo} />;
}