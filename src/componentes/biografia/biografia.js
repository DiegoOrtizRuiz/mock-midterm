import "bootstrap/dist/css/bootstrap.min.css";
import "./biografia.css";
import React, { useEffect, useState } from 'react';

const Biografia = () => {
  const [userImage, setUserImage] = useState(null);
  const [images, setImages] = useState([]);
  const [userData, setUserData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    description: '',
    website: '',
    posts: 12, // Fixed number of posts to 12
    followers: 0,
    following: 0
  });
  const [selectedImage, setSelectedImage] = useState(null); // For modal

  const postCount = 12; // Set a fixed number of posts to 12

  useEffect(() => {
    // Fetch the user info from Mockaroo API and select a random user
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://my.api.mockaroo.com/instagram.json?key=7350e8b0');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const randomUser = data[Math.floor(Math.random() * data.length)]; // Pick a random user from the list
        setUserData({
          username: randomUser.username,
          firstName: randomUser.first_name,
          lastName: randomUser.last_name,
          description: randomUser.description,
          website: randomUser.website,
          posts: 12, // Fixed post number
          followers: randomUser.followers,
          following: randomUser.following
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    // Fetch the user image
    const fetchUserImage = async () => {
      const response = await fetch('https://picsum.photos/350');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setUserImage(imageUrl);
    };

    // Fetch post images based on the fixed post count (12)
    const fetchPostImages = async () => {
      const fetchedImages = [];
      for (let i = 0; i < postCount; i++) {
        const response = await fetch('https://picsum.photos/350');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        fetchedImages.push(imageUrl);
      }
      setImages(fetchedImages);
    };

    fetchUserData();
    fetchUserImage();
    fetchPostImages();
  }, []);

  // Function to open modal with the selected image
  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col align-items-start" id="user_image">
          {userImage && <img src={userImage} alt="Fetched from API" id="imagen_usuario" />}
        </div>
        <div className="col align-items-center" id="user_info">
          <div className="col text-center">
            <div className="row align-items-start">
              <h1 className="username">{userData.username}</h1>
            </div>
            <div className="row align-items-center">
              <p className="description">
                <strong>{userData.firstName} {userData.lastName}</strong> {userData.description}
              </p>
              <p className="website">{userData.website}</p>
            </div>
            <div className="row align-items-end">
              <div className="col text-start">
                <p>
                  <strong>{userData.posts}</strong> post
                </p>
              </div>
              <div className="col text-center">
                <p>
                  <strong>{userData.followers}</strong> followers
                </p>
              </div>
              <div className="col text-end">
                <p>
                  <strong>{userData.following}</strong> following
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {/* Map through the images array and render in 4 columns */}
          {images.map((img, index) => (
            <div key={index} className="col-3 mb-3">
              <img
                src={img}
                alt={`Post image ${index}`}
                id={`img${index}`}
                style={{ cursor: 'pointer', width: '100%', height: 'auto' }}
                onClick={() => openModal(img)} // Click handler to open the modal
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal for displaying the larger image */}
      {selectedImage && (
        <div className="modal show d-block" tabIndex="-1" role="dialog" onClick={closeModal}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" onClick={closeModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img src={selectedImage} alt="Selected" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Biografia;
