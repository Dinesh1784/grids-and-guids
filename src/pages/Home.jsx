import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = ({ user }) => {
  return (
    <div className="container">
      <h2>Welcome, {user.displayName}</h2>
      <div className="btn-container">
        <Link className="link" to="/profile">
          Profile
        </Link>
      </div>
    </div>
  );
};

export default Home;
