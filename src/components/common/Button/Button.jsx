import React from "react";
import Style from "./Button.module.scss";

const Button = ({ title, img }) => {
  return (
    <button className={Style.btn_connect}>
      <span>
        {" "}
        {title}
        {img ? <img src={img} alt="img" width={20} height={20} /> : ""}
      </span>
    </button>
  );
};

export default Button;
