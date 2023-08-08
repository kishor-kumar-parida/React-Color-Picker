import "./styles.css";
import React from "react";
import ColorPicker from "./ColorPicker";

function App() {
  return (
    <ColorPicker
      colors={[
        "red",
        "blue",
        "aqua",
        "green",
        "teal",
        "maroon",
        "pink",
        "darkblue",
        "orange",
        "skyblue",
        "yellow",
        "purple",
        "lime"
      ]}
    />
  );
}

export default App;
