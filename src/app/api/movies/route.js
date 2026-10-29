import { fetchTMDB } from "../../../../lib/tmdb";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query")?.trim();

  if (!query) {
    return new Response(
      JSON.stringify({ error: "Query parameter is required" }),
      {
        status: 400,
      },
    );
  }

  try {
    const params = new URLSearchParams({ query }).toString();
    const data = await fetchTMDB("search/movie", params);

    if (!data || !data.results || data.results.length === 0) {
      return new Response(JSON.stringify({ error: "No results found" }), {
        status: 404,
      });
    }

    return Response.json(data);
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 502,
    });
  }
}
