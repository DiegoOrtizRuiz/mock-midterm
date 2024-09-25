import "bootstrap/dist/css/bootstrap.min.css";
import "./biografia.css";
import React, { useEffect, useState } from 'react';

const Biografia = () => {

  const [image, setImage] = useState(null);
  useEffect(() => {
  const fetchImage = async () => {
      const response = await fetch('https://picsum.photos/350'); // Reemplaza con tu URL de la API
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setImage(imageUrl);
  };fetchImage();
}, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col align-items-start" id = "user_image">
        {image && <img src={image} alt="Fetched from API" id="imagen_usuario"/>}
        </div>
        <div className="col align-items-center" style={{ height: "100vh" }}  id = "user_info">
          <div className="col text-center">
            <div className="row align-items-start">
              <h1 className="username">username</h1>
            </div>
            <div className="row align-items-center">
              <p className="description">
                <strong>Firstname Lastname</strong> neque porro quisquam est qui
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
              </p>
              <p className="website">www.website.com</p>
            </div>
            <div className="row align-items-end">
              <div className="col text-start">
                <p>
                  <strong>852</strong> post
                </p>
              </div>
              <div className="col text-center">
                <p>
                  <strong>400</strong> followers
                </p>
              </div>
              <div className="col text-end">
                <p>
                  <strong>320</strong> following
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biografia;
