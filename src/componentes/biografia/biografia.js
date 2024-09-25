import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./biografia.css";

const Biografia = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col align-items-start">
          <h1>Imagen perfil</h1>
        </div>
        <div className="col align-items-center" style={{ height: "100vh" }}>
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
