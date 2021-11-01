import React, { useState } from 'react';

import './LazyImage.scss';
 
const LazyImage = ({ imageUrl, alt, className }) => {
  const [loaded, setLoaded] = useState(false);
  
  const handleImageLoaded = () => {
    setLoaded(true);
  }
  
  const imageClasses = 
    `lazy-image ${loaded ? 'lazy-image--loaded' : ''} ${!!className && className}`;

  return (
    <div className="lazy-image-container">
      <img src={imageUrl} className={imageClasses} onLoad={handleImageLoaded} alt={alt} />
    </div>
  );
}

export default LazyImage;