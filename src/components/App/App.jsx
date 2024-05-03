import { NavLink, Route, Routes } from "react-router-dom";
import "./App.module.css";
import HomePage from "../../pages/HomePage/HomePage";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </>
  );
}

export default App;
