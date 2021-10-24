import { useState } from "react";
import { ColorBox } from "./ColorBox";
// import Button from "@mui/material/Button";

//textbox and color is adding to the style
export function Colorgetdata() {
  const [initial_colors, setColor] = useState();
  // addimg css styles as object
  const adding_styles = {
    backgroundColor: initial_colors,
    fontSize: "1.5rem",
    fontWeight: "bold",
  };
  // const colors = ["red", "yellow", "red"];
  const [newcolors, setNewColors] = useState([]);
  return (
    <div className="Color_box">
      <input
        className="color_input_textBox"
        value={initial_colors} //textbox ku values set pannuthu
        style={adding_styles}
        onChange={(event) => setColor(event.target.value)}
        placeholder="Enter a color"
      />

      <button
        className="AddBtn"
        onClick={() => {
          console.log(initial_colors, newcolors);
          setNewColors([...newcolors, initial_colors]);
        }}
      >
        Add color
      </button>

      {newcolors.map((clr, index) => (
        <ColorBox key={index} color={clr} />
      ))}
    </div>
  );
}
