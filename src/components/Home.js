import React from "react";
import "./Home.css"; // Import a CSS file for styling if needed

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to TextUtils!</h1>
      <p className="home-paragraph-long">
        TextUtils is your go-to application for all your text manipulation
        needs. Whether you want to analyze text, convert case, or perform other
        transformations, we've got you covered!
      </p>
    </div>
  );
};

export default Home;
