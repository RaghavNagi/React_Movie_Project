const API_KEY = "b5ee26203e176b1e2efc71b66e1f91ec";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  try{
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  if (!response.ok) throw new Error("Failed to fetch movies");
  const data = await response.json();
  console.log("Fetched Movies:", data.results);
  return data.results;
  }
  catch{
    console.error("Error in getPopularMovies:", error);
    return [];
  }
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};