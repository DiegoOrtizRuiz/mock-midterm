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
                            <div className="card" style={{ backgroundImage: `url(${'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ77cwA4ohMD_vZCfuMbkqYf0nUqcBN8QilQA&s'})` }}>
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
                            <div className="card" style={{ backgroundImage: `url(${'https://www.iberdrola.com/documents/20125/39940/running-mas-que-moda-746x419.jpg/40c26194-0a55-beff-b5f2-7cc4ca7533ce?t=1704699183011'})` }}>
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
                            <div className="card" style={{ backgroundImage: `url(${'https://images.unsplash.com/photo-1534289692684-c02577d5560d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'})` }}>
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
