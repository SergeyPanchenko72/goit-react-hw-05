import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../api";
import css from "./MovieCast.module.css";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

export default function MovieCast() {
  const { moviesId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    async function getMovieCast() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchMovieCast(moviesId);
        setMovieCast(data);
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
      {error && <Error />}
      {movieCast.length > 0 && (
        <div>
          <ul className={css.container}>
            {movieCast.map(({ id, profile_path, original_name, character }) => (
              <li key={id} className={css.item}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w200${profile_path}`
                      : "https://img.freepik.com/free-photo/view-3d-camera_23-2150866009.jpg?t=st=1715141854~exp=1715145454~hmac=0752668649282940ba1253f94772c310724126481bd45c98fb6f2f2c0e19a4a7&w=360"
                  }
                  alt={original_name}
                  width="200"
                />
                <p>
                  <b>Name: </b>
                  {original_name}
                </p>
                <p>
                  <b>Character: </b>
                  {character}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
