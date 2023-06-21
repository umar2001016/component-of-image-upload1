// src/App.js
import React, { useState } from 'react';

const App = () => {
  const [image, setImage] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageDelete = () => {
    setImage('');
  };

  return (
    <div>
      <h1>Image Upload Website</h1>
      <input type="file" onChange={handleImageUpload} />
      {image && (
        <div>
          <img src={image} alt="Uploaded" />
          <button onClick={handleImageDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default App;
