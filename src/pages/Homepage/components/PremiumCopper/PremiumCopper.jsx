import React, { useRef, useState } from "react";
import Style from "./PremiumCopper.module.scss";
import stone from "../../../../assets/images/copper-stone.svg";
import Button from "../../../../components/common/Button/Button";

const PremiumCopper = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const startPos = useRef({ x: 0, y: 0 });
  const startRotation = useRef({ x: 0, y: 0 });

  const handleStart = (e) => {
    isDragging.current = true;
    const { clientX, clientY } = e.touches ? e.touches[0] : e;
    startPos.current = { x: clientX, y: clientY };
    startRotation.current = rotation;
  };

  const handleMove = (e) => {
    if (!isDragging.current) return;

    const { clientX, clientY } = e.touches ? e.touches[0] : e;
    const deltaX = clientX - startPos.current.x;
    const deltaY = clientY - startPos.current.y;

    // Adjust sensitivity (lower = slower rotation)
    const sensitivity = 0.4;

    setRotation({
      x: startRotation.current.x - deltaY * sensitivity, // vertical movement = X-axis rotation
      y: startRotation.current.y + deltaX * sensitivity, // horizontal movement = Y-axis rotation
    });
  };

  const handleEnd = () => {
    isDragging.current = false;
  };

  return (
    <section className="custom-container  ">
      <div className={Style.premium_section}>
        <div className="row w-100">
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
                style={{ touchAction: "none"   }}>
                <div
                  className={Style.inner_wrapper}
                  style={{
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                    cursor: isDragging.current ? "grabbing" : "grab",
                    transition: isDragging.current
                      ? "none"
                      : "transform 0.15s ease-out",
                  }}>
                  <img
                    src={stone}
                    alt="stone"
                    width={479}
                    height={479}
                    className={Style.stone_img}
                    draggable="false"
                  />
                </div>
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
          <div className="col-lg-6 col-md-12 col-12  ">
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
