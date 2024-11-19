import React, { useRef, useEffect, useState } from 'react';
import './Section.css';

function Section({ title, description, imgSrc1, imgSrc2, imgSrc3 }) {
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
        {imgSrc2 && <img src={imgSrc2} alt="Section Image 2" className="section-image" />}
        {imgSrc3 && <img src={imgSrc3} alt="Section Image 3" className="section-image3" />}
      </div>
    </div>
  );
}

export default Section;
