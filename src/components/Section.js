import React, { useRef, useEffect, useState } from 'react';
import './Section.css';

function Section({ title, description, imgSrc1, imgSrc2, imgSrc3, imgSrc4, imgSrc5 }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`section ${isVisible ? 'visible' : ''}`}
    >
      <div className="text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="image-container">
        {imgSrc1 && <img src={imgSrc1} alt="Section Image 1" className="section-image" />}
        {imgSrc2 && <img src={imgSrc2} alt="Section Image 2" className="section-image2" />}
        {imgSrc3 && <img src={imgSrc3} alt="Section Image 3" className="section-image3" />}
        {imgSrc4 && <img src={imgSrc4} alt="Section Image 4" className="section-image4" />}
        {imgSrc5 && <img src={imgSrc5} alt="Section Image 5" className="section-image5" />}
      </div>
    </div>
  );
}

export default Section;
