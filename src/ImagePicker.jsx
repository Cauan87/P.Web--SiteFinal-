import React, { useState } from 'react';
import './ImagePicker.css';

const ImagePicker = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="image-picker-container">
      <div className="image-wrapper">
        {selectedImage ? (
          <img src={selectedImage} alt="Selected Image" className="ellipse-image" />
        ) : (
          <div className="ellipse-placeholder"></div>
        )}
      </div>
      <input type="file" accept="src/assets/*" onChange={handleImageChange} />
    </div>
  );
};

export default ImagePicker;
