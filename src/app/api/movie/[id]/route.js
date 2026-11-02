import { fetchTMDB } from "../../../../../lib/tmdb";

export async function GET(_req, { params }) {
  try {
    const { id } = await params;
    const movie = await fetchTMDB(`movie/${id}`);

    return Response.json(movie);
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 502,
    });
  }
}
