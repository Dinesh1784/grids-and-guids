import React from "react";
import { signInWithGoogle } from "../firebase";
import "./GoogleSigniinBtn.css";

const GoogleSigninBtn = () => {
  return (
    <div className="container">
      <button className="btn" onClick={signInWithGoogle}>
        <img
          className="btn-image"
          src="https://user-images.githubusercontent.com/1770056/58111071-c2941c80-7bbe-11e9-8cac-1c3202dffb26.png"
          alt="google btn"
        />
        <span>Continue with google</span>
      </button>
    </div>
  );
};

export default GoogleSigninBtn;
