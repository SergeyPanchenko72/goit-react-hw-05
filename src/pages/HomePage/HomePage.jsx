import { useEffect, useState } from "react";
import { fetchTrendingFilms } from "../../api";
import TrendingFilmsList from "../../components/FilmsList/FilmsList";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

export default function HomePage() {
  const [trendingFilms, setTrendingFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getTrendingFilms() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchTrendingFilms();
        setTrendingFilms(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getTrendingFilms();
  }, []);

  return (
    <div>
      {loading && <Loader />}
      {error && <Error />}
      {trendingFilms.length > 0 && (
        <TrendingFilmsList trendingFilms={trendingFilms} />
      )}
    </div>
  );
}
