import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

// Like  Counter function
export function Counter() {
  const [like, SetLike] = useState(0);
  const [dislike, SetDislike] = useState(0);

  // easy way to do the function here Follow this
  const increamentLike = () => SetLike(like + 1);
  const increamentDislike = () => SetDislike(dislike + 1);
  const styles = {
    color: "black",
  };
  return (
    <div>
      <IconButton style={styles} onClick={increamentLike} aria-label="like">
        <Badge badgeContent={like} color="primary">
          <span aria-label="" role="img">
            👍
          </span>
        </Badge>
      </IconButton>

      {/* <button onClick={increamentLike}>
              <span aria-label="like" role="img">
                👍 {like}
              </span>
            </button> */}
      <IconButton
        style={styles}
        onClick={increamentDislike}
        aria-label="delete"
      >
        <Badge badgeContent={dislike} color="error">
          <span aria-label="" role="img">
            👎
          </span>
        </Badge>
      </IconButton>

      {/* <IconButton aria-label="delete">
              <EditIcon />
            </IconButton> */}

      {/* <button onClick={increamentDislike}>
              <span aria-label="" role="img">
                👎{dislike}
              </span>
            </button> */}
    </div>
  );
}
