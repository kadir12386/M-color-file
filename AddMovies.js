import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useHistory } from "react-router-dom";
// import { updateStoreMovies } from "./getFromStorage";

export function AddMovies() {
  const history = useHistory();
  const [movieName, setMovieName] = useState("");
  const [moviePoster, setMoviePoster] = useState("");
  const [moviedes, setMovieDes] = useState("");
  const [movietrailer, setMovieTrailer] = useState("");

  const createMovie = (newMovie) => {
    //1.method -post
    //2.body - data And stringily
    //3. header
    fetch("https://6120e9a524d11c001762ee48.mockapi.io/movies", {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: { "Content-type": "application/json" },
    })
      .then((data) => data.json())
      .then((mvs) => history.push("/movie"));
  };

  const addMovie = () => {
    const newMovie = {
      name: movieName,
      pic: moviePoster,
      des: moviedes,
      trailer: movietrailer,
    };
    // console.log([...movies, newMovie], newMovie);
    // setMovies([...movies, newMovie]);
    // updateStoreMovies([...movies, newMovie]);
    createMovie(newMovie);

    console.log(newMovie.name);
  };

  return (
    <div className="inputBox">
      <TextField
        className="TextField"
        label="Movie name"
        color="success"
        variant="outlined"
        value={movieName} //textbox ku values set pannuthu
        onChange={(event) => setMovieName(event.target.value)}
      />

      <TextField
        label="Movie Poster"
        variant="outlined"
        color="success"
        value={moviePoster} //textbox ku values set pannuthu
        onChange={(event) => setMoviePoster(event.target.value)}
      />

      <TextField
        label="Movie des"
        variant="outlined"
        color="success"
        value={moviedes} //textbox ku values set pannuthu
        onChange={(event) => setMovieDes(event.target.value)}
      />
      <TextField
        label="movie trailer"
        variant="outlined"
        color="success"
        value={movietrailer} //textbox ku values set pannuthu
        onChange={(event) => setMovieTrailer(event.target.value)}
      />

      <button className="AddBtn" onClick={addMovie}>
        Add Moive
      </button>
    </div>
  );
}
