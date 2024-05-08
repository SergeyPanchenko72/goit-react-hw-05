import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../api";
import css from "./MovieReviews.module.css";
import Loader from "../Loader/Loader";

export default function MovieRevievs() {
  const { moviesId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movieRewiews, setMovieReviews] = useState([]);
  useEffect(() => {
    async function getMovieCast() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchMovieReviews(moviesId);
        setMovieReviews(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMovieCast();
  }, [moviesId]);
  return (
    <div>
      {loading && <Loader />}

      {movieRewiews.length === 0 && <p>Sorry. No reviews for this movie.</p>}
      <ul>
        {movieRewiews.map(({ id, author, content }) => (
          <li key={id} className={css.item}>
            <b>{author}</b>
            <p>{content}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
