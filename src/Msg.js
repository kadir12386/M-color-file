import { useState } from "react";
import { useHistory, useEffect } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InfoIcon from "@mui/icons-material/Info";
import { Counter } from "../Counter";

export function Msg({
  user_names,
  user_img,
  des,
  deleteMovieButton,
  id,
  editMovieButton,
}) {
  const [show, setShow] = useState(false);
  // const [nice, setNice] = useState("");
  const history = useHistory();
  const styles = { display: show ? "block" : "none" };
  // useEffect() => {
  //   console.log("State or props is changed", show, nice);
  // );}
  return (
    <div className="card">
      {/* <input onChnage={(event) => setNice(event.target.value)} />
      {nice} */}
      <div className="car-image">
        <img src={user_img} alt={user_names} />
      </div>
      <div className="movie_info">
        <h1>{user_names}</h1>

        <div className="edit_delete_icon">
          <IconButton
            aria-label="Info about movie"
            // color="primary"
            variant="contained"
            onClick={() => {
              history.push("/movies/" + id);
            }}
          >
            <InfoIcon />
          </IconButton>
          {editMovieButton}
          {deleteMovieButton}
        </div>

        <div className="counter_info_icon">
          <Counter />
          <IconButton
            aria-label="delete"
            color="error"
            variant="contained"
            onClick={() => setShow(!show)}
          >
            {show ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </div>

        <p style={styles}>{des}</p>
      </div>
    </div>
  );
}
