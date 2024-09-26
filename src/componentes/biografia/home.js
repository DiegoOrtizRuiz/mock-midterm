import React, { useEffect, useState } from 'react';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const sessions = Array.from({ length: 10 }, (_, i) => `Session ${i + 1}`);
    const [cardsData, setCardsData] = useState([]);
    

    // Fetch data from the API
    useEffect(() => {
        const fetchCardData = async () => {
            try {
                const response = await fetch('https://my.api.mockaroo.com/card.json?key=7350e8b0');
                const data = await response.json();
                setCardsData(Array(10).fill(data)); 
            } catch (error) {
                console.error('Error fetching card data:', error);
            }
        };

        fetchCardData();
    }, []);

    return (
        <div className="container home-container">
            {/* Cycling Section */}
            <div className="section">
                <h2>Cycling</h2>
                <div className="row">
                    {sessions.map((session, index) => (
                        <div key={index} className="col-md-6 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Cycling session</h5>
                                    {cardsData[index] ? (
                                        <>
                                            <p className="card-text">Recorrido alrededor de {cardsData[0][index].place}.</p>
                                            <p className="card-text">{cardsData[0][index].km} km - {cardsData[0][index].time}</p>
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
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Running session</h5>
                                    {cardsData[index] ? (
                                        <>
                                            <p className="card-text">Recorrido alrededor de {cardsData[0][index].place}.</p>
                                            <p className="card-text">{cardsData[0][index].km} km - {cardsData[0][index].time}</p>
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
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Swimming session</h5>
                                    {cardsData[index] ? (
                                        <>
                                            <p className="card-text">Recorrido alrededor de {cardsData[0][index].place}.</p>
                                            <p className="card-text">{cardsData[0][index].km} km - {cardsData[0][index].time}</p>
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
    );
};

export default Home;
