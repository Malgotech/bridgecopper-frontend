import React, { useEffect, useRef, useState } from "react";
import Style from "./ScrollStack.module.scss";
import cardImg1 from "../../../../assets/images/global-card-1.webp";
import cardImg2 from "../../../../assets/images/global-card-2.webp";
import cardImg3 from "../../../../assets/images/global-card-3.webp";
import cardImg4 from "../../../../assets/images/global-card-4.webp";

const ScrollStack = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const sectionRef = useRef(null);
  const isScrolling = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleWheel = (e) => {
      if (isScrolling.current) return;
      
      const sectionRect = section.getBoundingClientRect();
      const isInSection = sectionRect.top < window.innerHeight && sectionRect.bottom > 0;
      
      if (isInSection) {
        e.preventDefault();
        
        isScrolling.current = true;
        
        if (e.deltaY > 0) {
          // Scroll down - move to next card
          setCurrentCard(prev => Math.min(prev + 1, 3));
        } else {
          // Scroll up - move to previous card
          setCurrentCard(prev => Math.max(prev - 1, 0));
        }
        
        // Reset scrolling lock after animation
        setTimeout(() => {
          isScrolling.current = false;
        }, 800);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  // Calculate transform based on current card
  const getTransform = () => {
    const cardWidth = 400; // width + gap
    return `translateX(-${currentCard * cardWidth}px)`;
  };

  return (
    <section 
      ref={sectionRef}
      className={`${Style.scroll_section} tab-hide mobile-hide`}
    >
      <div className={Style.sticky_container}>
        <div 
          className={Style.cards_wrapper}
          style={{ transform: getTransform() }}
        >
          <div className={`${Style.global_card} ${currentCard === 0 ? Style.active : ''}`}>
            <img src={cardImg1} alt="ENAMI Approved" className={Style.card_img} />
            <div className={Style.card_content}>
              <p className={Style.p_text_3}>ENAMI Approved</p>
              <p className={Style.p_text_4}>
                Direct partnerships with ENAMI-authorized miners in Chile
              </p>
            </div>
          </div>
          <div className={`${Style.global_card} ${currentCard === 1 ? Style.active : ''}`}>
            <img src={cardImg2} alt="Vast Reserves" className={Style.card_img} />
            <div className={Style.card_content}>
              <p className={Style.p_text_3}>Vast Reserves</p>
              <p className={Style.p_text_4}>
                More than USD 10 billion in proven copper reserves
              </p>
            </div>
          </div>
          <div className={`${Style.global_card} ${currentCard === 2 ? Style.active : ''}`}>
            <img src={cardImg3} alt="Legacy Leadership" className={Style.card_img} />
            <div className={Style.card_content}>
              <p className={Style.p_text_3}>Legacy Leadership</p>
              <p className={Style.p_text_4}>
                Operations managed by a family office with over 80 years' experience
              </p>
            </div>
          </div>
          <div className={`${Style.global_card} ${currentCard === 3 ? Style.active : ''}`}>
            <img src={cardImg4} alt="World Reach" className={Style.card_img} />
            <div className={Style.card_content}>
              <p className={Style.p_text_3}>World Reach</p>
              <p className={Style.p_text_4}>
                Proven track record supplying global industrial, manufacturing, and energy.
              </p>
            </div>
          </div>
        </div>
        
        {/* Card indicators */}
        <div className={Style.card_indicators}>
          {[0, 1, 2, 3].map((index) => (
            <button
              key={index}
              className={`${Style.indicator} ${currentCard === index ? Style.active : ''}`}
              onClick={() => setCurrentCard(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollStack;