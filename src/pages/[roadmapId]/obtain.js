import { getResourcesByCategoryAndFilter } from '../../database/consultas';

export async function onRequestGet({ request }) {
  const url = new URL(request.url);
  const topicId = url.searchParams.get('topicId');
  const filter = url.searchParams.get('filter');

  const recursos = await getResourcesByCategoryAndFilter(topicId, filter);

  return new Response(JSON.stringify(recursos), {
    headers: { 'Content-Type': 'application/json' }
  });
}
