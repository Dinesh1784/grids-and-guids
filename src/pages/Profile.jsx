import React from "react";
import { auth } from "../firebase";
import "./Profile.css";

const Profile = ({ user }) => {
  const signOut = () => {
    auth.signOut();
  };

  return (
    <div>
      <button className="btn-logout" onClick={signOut}>
        logout
      </button>
      <div className="profile_container">
        {user.photoURL && (
          <img
            className="profile_img"
            src={user.photoURL || user.displayName[0]}
            alt={user.displayName}
            loading="eager"
          />
        )}
        <h1>{user.displayName}'s profile</h1>
        <h2>{user.email}</h2>
      </div>
    </div>
  );
};

export default Profile;
