import React from "react";

function Button() {
  const styles = {
    backgroundColor: "blue",
    color: "white",
    padding: "20px",
    borderRadius: "15px",
    border: "solid 4px black",
    cursor: "pointer"
  };
  return (
    <div>
      <h2> Button</h2>
      <button style={styles}>Click me!</button>
    </div>
  );
}

export default Button;
// u  can use dynamic styling like importing the style file with specific name then calling that  as object retrieval e.x className={styles.button} =>this means the button property in styles.css file or use inline styling with jsx file
