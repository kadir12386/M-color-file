// import { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";

import "./App.css";
import "./style.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Colorgetdata } from "./Colorgetdata";
import { MovieDetials } from "./MovieDetials";
import { MovieList } from "./MovieList";
import { AddMovies } from "./AddMovies";
import { EditMovie } from "./EditMovie";
// import { initial_Movies } from "./initial_Movies";
// import { getFromStorage, updateStoreMovies } from "./getFromStorage";
// import Theme from "./Theme";

// updateStoreMovies(initial_Movies);

// localStorage.setItem("movies", JSON.stringify(initial_Movies));

export default function App() {
  // const [movies, setMovies] = useState(getFromStorage("movies"));//this is for the localStorage
  // const [movies, setMovies] = useState([]); //this line is for the api mock

  // // const getMovies = () => {
  // //   fetch("https://6120e9a524d11c001762ee48.mockapi.io/movies")
  // //     .then((data) => data.json())
  // //     .then((mvs) => setMovies(mvs))
  // //     .then((mvs) => console.log(mvs));
  // // };
  // // useEffect(getMovies, []);

  return (
    <section>
      <AppBar position="static" className="nav">
        <Toolbar className="main-menu">
          <Link to="/Home">
            <img
              src="https://www.freepnglogos.com/uploads/film-reel-png/film-reel-the-movies-owens-valley-12.png"
              alt="logo"
              width="70"
            />
          </Link>
          <Link to="/Home">Home</Link>
          <Link to="/movie">Movies</Link>
          <Link to="/Add-movie">Add Movies</Link>
          <Link to="/color">Color games</Link>
          <Link to="/About">About pages</Link>
          {/* <Theme /> */}
        </Toolbar>
      </AppBar>
      {/* ========= Switch ============== */}

      <Switch>
        <Route path="/movies/edit/:id">
          <EditMovie />
        </Route>
        <Route path="/movies/:id">
          <MovieDetials />
        </Route>
        <Route path="/Home">Welcome to the pages</Route>
        <Route path="/Add-movie">
          <AddMovies />
        </Route>

        <Route path="/movie">
          {/* <MovieList movies={movies} setMovies={setMovies} /> */}
          <MovieList
          // movies={movies}
          // setMovies={setMovies}
          // getMovies={getMovies}
          />
        </Route>
        <Route path="/color">
          <Colorgetdata />
        </Route>
        <Route path="/About">About Pages</Route>
      </Switch>
      {/* =========================================== */}
    </section>
  );
}
