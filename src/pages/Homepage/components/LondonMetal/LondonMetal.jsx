import React, { useRef } from "react";
import Style from "./LondonMetal.module.scss";
import bridgeImg from "../../../../assets/images/bridge-img.svg";
import upIcon from "../../../../assets/images/up-icon.svg";

const LondonMetal = () => {
  const boundingRef = useRef(null);
  const handleEnter = (e) => {
    boundingRef.current = e.currentTarget.getBoundingClientRect();
  };

  const handleMove = (e) => {
    if (!boundingRef.current) return;
    const rect = boundingRef.current;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = x / rect.width;
    const yPercent = y / rect.height;

    const rotateX = (yPercent - 0.5) * -20; // vertical tilt
    const rotateY = (xPercent - 0.5) * 20; // horizontal tilt

    e.currentTarget.style.setProperty("--rotateX", `${rotateX}deg`);
    e.currentTarget.style.setProperty("--rotateY", `${rotateY}deg`);
    e.currentTarget.style.setProperty("--x", `${xPercent * 100}%`);
    e.currentTarget.style.setProperty("--y", `${yPercent * 100}%`);
  };

  const handleLeave = () => {
    boundingRef.current = null;
  };

  return (
    <section className={Style.london_section}>
      <div className="custom-container ">
        <div className={Style.london_container}>
          <h2 className={Style.h_text_1}>
            London Metal Exchange (LME) <br />
            <span>Price Today </span>
          </h2>

          <div className={Style.bridge_content}>
            {/* <img
              src={bridgeImg}
              alt="bridge"
              width={375}
              height={400}
              className={Style.bridge_img}
            /> */}

              <div className={Style.bridge_wrapper}>
      <div
        className={Style.bridge_container}
        onMouseEnter={handleEnter}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        <img
          src={bridgeImg}
          alt="bridge"
          width={375}
          height={400}
          className={Style.bridge_img}
          draggable="false"
        />
      </div>
    </div>

            <div className={Style.bridge_score_content}>
              <p className={Style.p_text_1}>
                $10,962.50/<span>METRIC TON</span>
              </p>

              <p className={Style.p_text_2}>
                <img src={upIcon} alt="bullish" width={15} height={14} />
                +0.99%
              </p>
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
      </div>
    </section>
  );
};

export default LondonMetal;
