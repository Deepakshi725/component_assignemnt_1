// write the component code here
// Usercard.jsx
//eslint-disable-next-line
import React from 'react';
import image from "../assets/pp.jpg"
import './Usercard.css';  // You can add custom styles here for the card component

const Usercard = () => {
  // Static user details
  const profilePhoto = image; // Dummy image URL
  const name = 'Deepakshi';
  const email = 'deepakshi.sharma@kalvium.community';
  const phone = '+91 70xxxxx93';
  const address = 'Ghar, Loni, Pune.';

  return (
    <div className="usercard">
      <div className="usercard-photo">
        <img src={profilePhoto} alt="Profile" />
      </div>
      <div className="usercard-details">
        <h3>{name}</h3>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Address:</strong> {address}</p>
      </div>
    </div>
  );
};

export default Usercard;
