const API_KEY = '05b27f765345223aac972c2dbb5eec37';
const BASE_URL = 'https://api.themoviedb.org/3/';
async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Some thing went wrong!'));
}
export function getTrendingMovie() {
  return fetchWithErrorHandling(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`,
  );
}
export function getMovieById(id) {
  return fetchWithErrorHandling(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);
}
