import React from "react";
import Style from "./Button.module.scss";

const Button = ({ title, img, className = "", onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${Style.btn_connect} ${className}`}
    >
      <span>
        {title}
        {img && <img src={img} alt="icon" width={20} height={20} />}
      </span>
    </button>
  );
};

export default Button;
