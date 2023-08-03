import React, { useState } from "react";
import "./Login.css";
const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send the data to the server or perform validation
    console.log("Submitted data:", {
      firstName,
      lastName,
      email,
      phoneNumber,
    });
    // Clear the form fields after submission
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
  };

  return (
    <div className="kol">
        <h1 className="scr">CONTACTEZ-NOUS</h1>
    <div className="login-container">
        
      <form onSubmit={handleSubmit}>
        <label>
          Nom et prenom :
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Numero de telephone:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </label>
        <label>
          Votre message:
          <textarea
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
      required
    />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
    </div>
  );
};

export default Login;

