import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchDetailsFilm } from "../../api";
import css from "./MovieDetailsPage.module.css";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

export default function MovieDetailsPage() {
  const { moviesId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [detailsFilm, setDetailsFilm] = useState(null);
  const location = useLocation();

  const backLinkURLRef = useRef(location.state);
  console.log(backLinkURLRef);
  useEffect(() => {
    async function getDetailsFilm() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchDetailsFilm(moviesId);
        setDetailsFilm(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getDetailsFilm();
  }, [moviesId]);

  const {
    poster_path,
    title,
    release_date,
    vote_average,
    vote_count,
    overview,
    genres,
  } = detailsFilm ?? {};
  return (
    <div>
      <div className={css.container}>
        <NavLink
          to={backLinkURLRef.current ?? "/movies"}
          className={css.backLink}
        >
          Go back
        </NavLink>
      </div>
      <div>
        {loading && <Loader />}
        {error && <Error />}
        {detailsFilm && (
          <div className={css.details}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={title}
              width="400"
            />
            <div className={css.info}>
              <h1>
                {title} ({release_date})
              </h1>
              <p>
                <b>User Score:</b> {vote_average}
              </p>
              <p>
                <b>Vote count:</b> {vote_count}
              </p>
              <h3>Overviewes:</h3>
              <p> {overview}</p>
              <h3>Genres:</h3>
              <ul className={css.ganres}>
                {genres.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      <ul className={css.listDetails}>
        <li>
          <NavLink to="credits" className={css.linkDetails}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" className={css.linkDetails}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
