import { NavLink, useLocation } from "react-router-dom";
import css from "./FilmsList.module.css";

export default function FilmsList({ trendingFilms }) {
  const location = useLocation();
  return (
    <div>
      <ul className={css.container}>
        {trendingFilms.map(({ id, poster_path, title }) => (
          <li key={id} className={css.item}>
            <NavLink className={css.link} to={`/movies/${id}`} state={location}>
              <div>
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                      : "https://img.freepik.com/free-photo/view-3d-camera_23-2150866009.jpg?t=st=1715141854~exp=1715145454~hmac=0752668649282940ba1253f94772c310724126481bd45c98fb6f2f2c0e19a4a7&w=360"
                  }
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
