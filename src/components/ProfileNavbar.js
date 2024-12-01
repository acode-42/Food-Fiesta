import React from "react";
import { Link } from "react-router-dom";  // Importing Link to handle navigation
import './ProfileNavbar.scss';  // Import the profile navbar styles

const ProfileNavbar = () => {
  return (
    <div className="profile-navbar">
      <ul className="profile-navbar-links">
        <li>
          <Link to="/calorie-tracker" className="profile-navbar-item">
            Calorie Tracker
          </Link>
        </li>
        <li>
          <Link to="/food-intake" className="profile-navbar-item">
            Food Intake
          </Link>
        </li>
        <li>
          <Link to="/goal" className="profile-navbar-item">
            Goal
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileNavbar;
