import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTU4NDM2OWU4OTA2ZDFlODk5ZTA4Mjk0OTE2ZGU0ZiIsInN1YiI6IjY2MzUzMjY5NjYxMWI0MDEyYTY3MzY4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Utb9yfYe1QxWushFqHVrjqUvYylhJ5K3qrX0nzVj_qk",
  },
};

export const fetchTrendingFilms = async () => {
  const response = await axios.get(
    "/trending/movie/day?language=en-US",
    options
  );
  return response.data.results;
};

export const fetchDetailsFilm = async (id) => {
  const response = await axios.get(`/movie/${id}`, options);
  return response.data;
};

export const fetchMovieCast = async (id) => {
  const response = await axios.get(`/movie/${id}/credits`, options);
  return response.data.cast;
};

export const fetchMovieReviews = async (id) => {
  const response = await axios.get(`/movie/${id}/reviews`, options);
  return response.data.results;
};

export const fetchMovies = async (query) => {
  const response = await axios.get("/search/movie", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTU4NDM2OWU4OTA2ZDFlODk5ZTA4Mjk0OTE2ZGU0ZiIsInN1YiI6IjY2MzUzMjY5NjYxMWI0MDEyYTY3MzY4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Utb9yfYe1QxWushFqHVrjqUvYylhJ5K3qrX0nzVj_qk",
    },
    params: {
      query: query,
      include_adult: false,
      language: "en-US",
      page: 1,
    },
  });

  return response.data.results;
};
