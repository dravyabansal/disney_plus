import React from "react";
import "./myStyle.css";

function StyleSheet(props) {
  let colorName = props.className ? "primary" : "";
  return (
    <div>
      <h1 className={`${colorName} font-xl`}> StyleSheet </h1>
    </div>
  );
}

export default StyleSheet;
