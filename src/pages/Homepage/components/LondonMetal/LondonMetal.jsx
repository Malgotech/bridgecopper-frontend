import React from "react";
import Style from "./LondonMetal.module.scss";
import bridgeImg from "../../../../assets/images/bridge-img.svg";

const LondonMetal = () => {
  return (
    <section className={Style.london_section}>
      <div className="custom-container ">
        <div className={Style.london_container}>
          <h2 className={Style.h_text_1}>
            London Metal Exchange (LME) <br />
            <span>Price Today </span>
          </h2>

          <div className={Style.bridge_content}>
            <img
              src={bridgeImg}
              alt="bridge"
              width={375}
              height={400}
              className={Style.bridge_img}
            />

            <div className={Style.bridge_score_content}></div>
          </div>

          <div className={Style.round_animation}>
            <div className={Style.round_container}>
              <div className={Style.ripple}></div>
              <div className={Style.ripple}></div>
              <div className={Style.ripple}></div>
              <div className={Style.ripple}></div>
              <div className={Style.round}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LondonMetal;
