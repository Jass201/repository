import React, { useState } from "react";
import "./HomeOwnerSettings.css";

const HomeOwnerSettings = () => {
  // State for each input field
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle the submission, for example sending data to a server
    console.log({ firstName, lastName, email, phoneNumber });
  };

  return (
    <div className="user-profile-form">
      <h2>Algemene Info</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">Voornaam</label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Achternaam</label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Telefoonnummer</label>
          <input
            id="phoneNumber"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <button type="submit">Gegevens wijzigen</button>
      </form>
    </div>
  );
};

export default HomeOwnerSettings;
