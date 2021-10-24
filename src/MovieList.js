import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Msg } from "./Msg";
// import { updateStoreMovies } from "./getFromStorage";

export function MovieList() {
  const [movies, setMovies] = useState([]); //this line is for the api mock

  const getMovies = () => {
    fetch("https://6120e9a524d11c001762ee48.mockapi.io/movies")
      .then((data) => data.json())
      .then((mvs) => setMovies(mvs))
      .then((mvs) => console.log(mvs));
  };
  useEffect(getMovies, []);

  const history = useHistory();

  const deleteMovie = (id) => {
    console.log(id); //new

    fetch("https://6120e9a524d11c001762ee48.mockapi.io/movies/" + id, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then((data) => getMovies());
    // .then((mvs) => console.log(mvs));
  }; //new

  return (
    <div className="App">
      {/* we need to update the movie not the inital moives */}
      {movies.map((el, index) => {
        return (
          <div key={index}>
            <Msg
              editMovieButton={
                <IconButton
                  aria-label="Info about movie"
                  variant="contained"
                  onClick={() => {
                    history.push("/movies/edit/" + el.id);
                  }}
                >
                  <EditIcon />
                </IconButton>
              }
              deleteMovieButton={
                <IconButton
                  //new==========
                  onClick={() => deleteMovie(el.id)}
                  //new==========
                  // onClick={() => {
                  //   console.log("deleteing", index);
                  //   const removeIdx = index;
                  //   console.log(movies.filter((mv, idx) => idx !== removeIdx));
                  //   setMovies(movies.filter((mv, idx) => idx !== removeIdx));

                  //   updateStoreMovies(
                  //     movies.filter((mv, idx) => idx !== removeIdx)
                  //   );
                  // }}
                  aria-label="delete"
                  color="error"
                >
                  <DeleteIcon />
                </IconButton>
              }
              key={el.id}
              user_names={el.name}
              user_img={el.pic}
              des={el.des}
              id={el.id}
            />
          </div>
        );
      })}
    </div>
  );
}
