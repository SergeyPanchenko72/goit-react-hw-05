import { NavLink, useLocation } from "react-router-dom";
import css from "./TrendingFilmsList.module.css";

export default function TrendingFilmsList({ trendingFilms }) {
  const location = useLocation();
  return (
    <div>
      <ul className={css.container}>
        {trendingFilms.map(({ id, poster_path, title }) => (
          <li key={id} className={css.item}>
            <NavLink className={css.link} to={`/movies/${id}`} state={location}>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={title}
                  width="250"
                />
                <p className={css.title}> {title}</p>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
