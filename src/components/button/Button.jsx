import React from "react";
import "./Button.css";
const Button = (props) => {
  return (
    <>
      <button
        className="h-fit bg-gradient-to-br from-[#c94b4b] to-[#4b134f] text-white p-2 rounded-md font-medium px-4"
        onClick={props.action}
      >
        {props.text}
      </button>
    </>
  );
};

export default Button;
