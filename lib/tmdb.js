const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_API_KEY = process.env.API_KEY;

export async function fetchFromTMDB(endpoint, params = {}) {
  try {
    const url = `${BASE_URL}/${endpoint}?api_key=${TMDB_API_KEY}&${params}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(
        `TMDB Server Error: ${response.status} ${response.statusText}`,
      );
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching data from TMDB:", error);
    throw error;
  }
}
