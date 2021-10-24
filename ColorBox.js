//textbox to color and its creates a div box when you click the add button
export function ColorBox({ color }) {
  const div_box_styles = {
    backgroundColor: color,
    width: "150px",
    height: "100px",
  };
  return <div style={div_box_styles}></div>;
}
