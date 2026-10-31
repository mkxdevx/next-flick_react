import { fetchTMDB } from "../../../../../lib/tmdb";

export async function GET() {
  try {
    const data = await fetchTMDB("discover/movie");

    return Response.json(data);

  } catch (error) {
    return Response.json({ error: error.message }, { status: 502 });
  }
}
