import { Formik, Form, Field } from "formik";
import { useEffect, useState } from "react";
import { fetchMovies } from "../../api";
import FilmsList from "../../components/FilmsList/FilmsList";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import css from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (values, action) => {
    setSearchParams(values);
    action.resetForm();
  };
  useEffect(() => {
    async function getMovies() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchMovies(searchParams.query);
        setSearchMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMovies();
  }, [searchParams]);
  return (
    <div>
      <Formik
        initialValues={{
          query: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.searchForm}>
          <Field
            name="query"
            placeholder="Search movie"
            className={css.searchInput}
          />
          <button type="submit" className={css.searchButton}>
            Search
          </button>
        </Form>
      </Formik>
      {loading && <Loader />}
      {error && <Error />}

      {searchMovies.length > 0 && <FilmsList trendingFilms={searchMovies} />}
    </div>
  );
}
