import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const STYLES = ["button__primary", "button__outline"];

const SIZES = ["button__medium", "button__large"];

function Button({ children, type, onClick, buttonStyle, size }) {
  const checkbuttonStyle = () => {
    if (STYLES.includes(buttonStyle)) {
      return buttonStyle;
    } else {
      return STYLES[0];
    }
  };

  const buttonSize = () => {
    if (SIZES.includes(size)) {
      return size;
    } else {
      return SIZES[0];
    }
  };
  return (
    <Link to="/signup">
      <button
        className={`button ${checkbuttonStyle()} ${buttonSize()}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
}

export default Button;
