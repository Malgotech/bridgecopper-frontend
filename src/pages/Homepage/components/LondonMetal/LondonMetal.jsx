import React, { useEffect, useRef, useState } from "react";
import Style from "./LondonMetal.module.scss";
import bridgeImg from "../../../../assets/images/bridge-img.png";
import upIcon from "../../../../assets/images/up-icon.svg";
import axios from "axios";

const LondonMetal = () => {
  const [price, setprice] = useState("");
  const [percent, setPercent] = useState("");
  console.log("price :>> ", price);
  console.log("percent :>> ", percent);
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

    const rotateX = (yPercent - 0.5) * -20;
    const rotateY = (xPercent - 0.5) * 20;

    e.currentTarget.style.setProperty("--rotateX", `${rotateX}deg`);
    e.currentTarget.style.setProperty("--rotateY", `${rotateY}deg`);
    e.currentTarget.style.setProperty("--x", `${xPercent * 100}%`);
    e.currentTarget.style.setProperty("--y", `${yPercent * 100}%`);
  };

  const handleLeave = () => {
    boundingRef.current = null;
  };

  const getPrice = async () => {
    try {
      const url =
        "https://markets.businessinsider.com/ajax/finanzen/api/commodities?urls=copper-price";
      const { data } = await axios.get(
        "https://api.allorigins.win/raw?url=" + encodeURIComponent(url)
      );
      console.log("Copper price (USD/ton):", data[0]?.Quotes[0]);
      setprice(data[0]?.Quotes[0]?.LastPrice);

      setPercent(data[0]?.Quotes[0]?.ChangePercent);
    } catch (error) {
      console.error("Error fetching price:", error);
    }
  };

  useEffect(() => {
    getPrice();
  }, []);

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
                onMouseLeave={handleLeave}>
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
             ${price }/<span>METRIC TON</span>
              </p>

              {percent < 0 ? (
                <p className={Style.p_text_2_red}>
                  <img src={upIcon} alt="bullish" width={15} height={14} />
                  {percent}
                </p>
              ) : (
                <p className={Style.p_text_2}>
                  <img src={upIcon} alt="bullish" width={15} height={14} />
                  +{percent}
                </p>
              )}
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
