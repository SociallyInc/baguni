import React from 'react';

function Section({ title, description, buttonText, imgSrc }) {
  return (
    <div className="section">
      <div className="text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {imgSrc && <img src={imgSrc} alt="Section Image" className="section-image" />}
    </div>
  );
}

export default Section;
