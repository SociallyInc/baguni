import React from 'react';

function Section({ title, description, imgSrc1, imgSrc2, imgSrc3 }) {
  return (
    <div className="section">
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
