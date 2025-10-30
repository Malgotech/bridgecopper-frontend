import React, { useRef, useState } from "react";
import Style from "./PremiumCopper.module.scss";
import stone from "../../../../assets/images/copper-stone.svg";
import Button from "../../../../components/common/Button/Button";

const PremiumCopper = () => {
  const [rotation, setRotation] = useState(0);
  const isDragging = useRef(false);
  const startXRef = useRef(0);
  const startRotationRef = useRef(0);

  const handleStart = (e) => {
    isDragging.current = true;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    startXRef.current = x;
    startRotationRef.current = rotation;
  };

  const handleMove = (e) => {
    if (!isDragging.current) return;

    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const deltaX = x - startXRef.current;

    const newRotation = (startRotationRef.current + deltaX) % 360;
    setRotation(newRotation);
  };

  const handleEnd = () => {
    isDragging.current = false;
  };

  return (
    <section className="custom-container  ">
      <div className={Style.premium_section}>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12">
            <div className={Style.premium_section_left}>
              <div
                className={Style.container}
                onMouseDown={handleStart}
                onMouseMove={handleMove}
                onMouseUp={handleEnd}
                onMouseLeave={handleEnd}
                onTouchStart={handleStart}
                onTouchMove={handleMove}
                onTouchEnd={handleEnd}
                style={{ touchAction: "none" }}>
                <img
                  src={stone}
                  alt="stone"
                  width={479}
                  height={479}
                  className={Style.stone_img}
                  style={{
                    transform: `rotate(${rotation}deg)`,
                    cursor: isDragging.current ? "grabbing" : "grab",
                    userSelect: "none",
                    transition: isDragging.current
                      ? "none"
                      : "transform 0.1s ease-out",
                  }}
                  draggable="false"
                />
              </div>

              <div
                className={`${Style.round_container} ${Style.round_container_1}`}>
                <div className={Style.orbit_path}>
                  <div className={Style.cu_container}>
                    <span>Cu</span>
                  </div>
                </div>

                <div className={Style.reserve_content}>
                  <span>
                    $10B <br />
                    Reserve
                  </span>
                </div>

                <div
                  className={`${Style.round_container} ${Style.round_container_2}`}>
                  <div className={Style.orbit_path}>
                    <div className={Style.mass_container}>
                      <span>
                        Mass <br />
                        63.546
                      </span>
                    </div>

                    <div className={Style.hash_container}>
                      <span>#29</span>
                    </div>
                  </div>

                  <div
                    className={`${Style.round_container} ${Style.round_container_3}`}>
                    <div
                      className={`${Style.round_container} ${Style.round_container_4}`}>
                      <div className={Style.round} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            <div className={Style.premium_section_right}>
              <h2 className={Style.h_text_1}>
                <span> Premium copper </span> <br className="break" />{" "}
                concentrate. Direct from <br className="break" /> Chile’s
                world-class ore
              </h2>

              <p className={Style.p_text_1}>
                Bridge Copper sources copper ore from Chile, recognized globally
                for its rich mineral reserves and unparalleled ore quality. Our
                partners in Chile are among just{" "}
                <span>
                  {" "}
                  twelve elite mining companies authorized by ENAMI Chile,{" "}
                </span>{" "}
                the government’s National Mining Enterprise, ensuring all supply
                meets strict industry and export standards.
              </p>
              <Button title="Explore Our Network" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumCopper;
