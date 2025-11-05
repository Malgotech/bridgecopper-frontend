import React, { useRef, useEffect } from "react";
import Style from "./ScrollStack.module.scss";
import cardImg1 from "../../../../assets/images/global-card-1.webp";
import cardImg2 from "../../../../assets/images/global-card-2.webp";
import cardImg3 from "../../../../assets/images/global-card-3.webp";
import cardImg4 from "../../../../assets/images/global-card-4.webp";

const ScrollStack = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const sec = sectionRef.current;
    if (!sec) return;

    // pointer events (desktop / trackpad / stylus)
    const onEnter = () => sec.classList.add(Style["is-active"]);
    const onLeave = () => sec.classList.remove(Style["is-active"]);

    // touch: toggle on first tap, remove on second tap outside
    let touchToggled = false;
    const onTouch = (e) => {
      // prevent immediate click behavior interfering
      e.stopPropagation();
      touchToggled = !touchToggled;
      if (touchToggled) sec.classList.add(Style["is-active"]);
      else sec.classList.remove(Style["is-active"]);
    };

    sec.addEventListener("pointerenter", onEnter);
    sec.addEventListener("pointerleave", onLeave);
    sec.addEventListener("touchstart", onTouch);

    // close the touch activation when tapping outside the section
    const onDocTouch = (e) => {
      if (!sec.contains(e.target)) {
        touchToggled = false;
        sec.classList.remove(Style["is-active"]);
      }
    };
    document.addEventListener("touchstart", onDocTouch);

    return () => {
      sec.removeEventListener("pointerenter", onEnter);
      sec.removeEventListener("pointerleave", onLeave);
      sec.removeEventListener("touchstart", onTouch);
      document.removeEventListener("touchstart", onDocTouch);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${Style.scroll_section} ${Style.tabHide} ${Style.mobileHide}`}
    >
      <div className={Style.sticky_container}>
        <div className={Style.cards_wrapper}    ref={sectionRef}>
          <div className={Style.global_card} >
            <img src={cardImg1} alt="global-card" className={Style.card_img} />
            <div className={Style.card_content}>
              <p className={Style.p_text_3}>ENAMI Approved</p>
              <p className={Style.p_text_4}>
                Direct partnerships with ENAMI-authorized miners in Chile
              </p>
            </div>
          </div>

          <div className={Style.global_card}>
            <img src={cardImg2} alt="global-card" className={Style.card_img} />
            <div className={Style.card_content}>
              <p className={Style.p_text_3}>Vast Reserves</p>
              <p className={Style.p_text_4}>
                More than USD 10 billion in proven copper reserves
              </p>
            </div>
          </div>

          <div className={Style.global_card}>
            <img src={cardImg3} alt="global-card" className={Style.card_img} />
            <div className={Style.card_content}>
              <p className={Style.p_text_3}>Legacy Leadership</p>
              <p className={Style.p_text_4}>
                Operations managed by a family office with over 80 years’
                experience
              </p>
            </div>
          </div>

          <div className={Style.global_card}>
            <img src={cardImg4} alt="global-card" className={Style.card_img} />
            <div className={Style.card_content}>
              <p className={Style.p_text_3}>World Reach</p>
              <p className={Style.p_text_4}>
                Proven track record supplying global industrial, manufacturing,
                and energy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollStack;
