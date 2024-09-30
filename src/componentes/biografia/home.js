import React, { useEffect, useState } from "react";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap"; // Importar componentes de Bootstrap


const Home = () => {
  const sessions = Array.from({ length: 10 }, (_, i) => `Session ${i + 1}`);
  const [cardsData, setCardsData] = useState([]);
  const [profileData, setProfileData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null); // Estado para card seleccionada
  const [showModal, setShowModal] = useState(false); // Estado para mostrar el modal
  // Componente Card para mostrar cada tarjeta
  const CardComponent = ({ card }) => (
    <div className="card">
      <p>{card.place}</p>
      <p>{card.km} km</p>
      <p>{card.time} h</p>
    </div>
  );



  // Fetch data from the API
  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await fetch(
          "https://my.api.mockaroo.com/profile.json?key=6cdc8790"
        );
        const data = await response.json();
        setCardsData(Array(10).fill(data));
      } catch (error) {
        console.error("Error fetching card data:", error);
      }
    };

    const fetchProfileData = async () => {
      try {
        const response = await fetch(
          "https://my.api.mockaroo.com/profile2.json?key=6cdc8790"
        );
        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchCardData();
    fetchProfileData();
  }, []); // Eliminamos profileData de las dependencias

  const handleCardClick = (index) => {
    setSelectedCard(cardsData[0][index]); // Selecciona los detalles de la tarjeta correcta
    setShowModal(true); // Muestra el modal
  };


  const handleCloseModal = () => setShowModal(false);

  const splitFullName = (fullName) => {
    if (!fullName) return { firstName: "", lastName: "" }; // Handle undefined or null
    const [firstName, ...lastName] = fullName.split(" ");
    return { firstName, lastName: lastName.join(" ") };
  };

  return (
    <div>
      <div className="container home-container">
        {/* Cycling Section */}
        <div className="section">
          <h2>Cycling</h2>
          <div className="row">
            {sessions.map((session, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div
                  className="card"
                  style={{
                    backgroundImage: `url(${"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ77cwA4ohMD_vZCfuMbkqYf0nUqcBN8QilQA&s"})`,
                  }}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="card-body">
                    <h5 className="card-title">Cycling session</h5>
                    {cardsData[index] ? (
                      <>
                        <p className="card-text">
                          Recorrido alrededor de {cardsData[0][index].place}.
                        </p>
                        <p className="card-text">
                          {cardsData[0][index].km} k -{" "}
                          {cardsData[0][index].time} h
                        </p>
                      </>
                    ) : (
                      <p className="card-text">Loading data...</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Running Section */}
        <div className="section">
          <h2>Running</h2>
          <div className="row">
            {sessions.map((session, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div
                  className="card"
                  style={{
                    backgroundImage: `url(${"https://www.iberdrola.com/documents/20125/39940/running-mas-que-moda-746x419.jpg/40c26194-0a55-beff-b5f2-7cc4ca7533ce?t=1704699183011"})`,
                  }}
                >
                  <div className="card-body">
                    <h5 className="card-title">Running session</h5>
                    {cardsData[index] ? (
                      <>
                        <p className="card-text">
                          Recorrido alrededor de {cardsData[0][index].place}.
                        </p>
                        <p className="card-text">
                          {cardsData[0][index].km} k -{" "}
                          {cardsData[0][index].time} h
                        </p>
                      </>
                    ) : (
                      <p className="card-text">Loading data...</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Swimming Section */}
        <div className="section">
          <h2>Swimming</h2>
          <div className="row">
            {sessions.map((session, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div
                  className="card"
                  style={{
                    backgroundImage: `url(${"https://images.unsplash.com/photo-1534289692684-c02577d5560d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`,
                  }}
                >
                  <div className="card-body">
                    <h5 className="card-title">Swimming session</h5>
                    {cardsData[index] ? (
                      <>
                        <p className="card-text">
                          Recorrido alrededor de {cardsData[0][index].place}.
                        </p>
                        <p className="card-text">
                          {cardsData[0][index].km} k -{" "}
                          {cardsData[0][index].time} h
                        </p>
                      </>
                    ) : (
                      <p className="card-text">Loading data...</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Modal para mostrar detalles de la card */}
      {selectedCard && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Detalles de la sesión</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CardComponent card={selectedCard} /> {/* Reutilizas la tarjeta */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      )}


      {/* Horizontal Bar Content */}
      {profileData ? (
        <div className="horizontal-bar">
          <img
            src="https://fastly.picsum.photos/id/504/350/350.jpg?hmac=pWXxhOxeBqSxRNCDyi15vo80l3FSHPCR25DzY4RdNiA"
            alt="profile pic"
            className="profile-pic"
          />
          {profileData && profileData.nombre_completo ? (
            <div className="user-name">
              <span className="first-name">
                {splitFullName(profileData.nombre_completo).firstName}
              </span>
              <span className="last-name">
                {splitFullName(profileData.nombre_completo).lastName}
              </span>
            </div>
          ) : (
            <p>Loading profile...</p>
          )}
          <span className="activity">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="currentColor"
              class="bi bi-bicycle"
              viewBox="0 0 16 16"
            >
              <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5m1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139zM8 9.057 9.598 6.5H6.402zM4.937 9.5a2 2 0 0 0-.487-.877l-.548.877zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53z" />
            </svg>{" "}
            {profileData.ciclying}
          </span>
          <span className="activity">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="currentColor"
              class="bi bi-person-walking"
              viewBox="0 0 16 16"
            >
              <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6.44 3.752A.75.75 0 0 1 7 3.5h1.445c.742 0 1.32.643 1.243 1.38l-.43 4.083a1.8 1.8 0 0 1-.088.395l-.318.906.213.242a.8.8 0 0 1 .114.175l2 4.25a.75.75 0 1 1-1.357.638l-1.956-4.154-1.68-1.921A.75.75 0 0 1 6 8.96l.138-2.613-.435.489-.464 2.786a.75.75 0 1 1-1.48-.246l.5-3a.75.75 0 0 1 .18-.375l2-2.25Z" />
              <path d="M6.25 11.745v-1.418l1.204 1.375.261.524a.8.8 0 0 1-.12.231l-2.5 3.25a.75.75 0 1 1-1.19-.914zm4.22-4.215-.494-.494.205-1.843.006-.067 1.124 1.124h1.44a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.531-.22Z" />
            </svg>
            {profileData.running}
          </span>
          <span className="activity">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              fill="currentColor"
              class="bi bi-water"
              viewBox="0 0 16 16"
            >
              <path d="M.036 3.314a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 3.964a.5.5 0 0 1-.278-.65m0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 6.964a.5.5 0 0 1-.278-.65m0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 9.964a.5.5 0 0 1-.278-.65m0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65" />
            </svg>{" "}
            {profileData.swimming}
          </span>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Home;
