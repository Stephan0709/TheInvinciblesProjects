import React from "react";
import "./profilepage.css"; // Custom styles for profile page

function ProfilePage() {
  return (
    <>
      {/* === Navigation Bar === */}
      <nav className="navbar">
        <div className="navbar-left">
          <span className="brand">SmartBet</span>
        </div>
        <div className="navbar-right">
          <a href="#">Dashboard</a>
          <a href="#">Fixtures</a>
          <a href="#">Promotions</a>
          <button className="icon-btn">⚙️</button>
          <button className="icon-btn">👤</button>
        </div>
      </nav>

      {/* === Profile Page Content === */}
      <div className="profile-container">
        <h1>My Account</h1>

        {/* === Profile Header === */}
        <div className="profile-header">
          <div className="profile-pic" />

          <div>
            {/* TODO: Replace this hardcoded name with dynamic user data from backend/Firebase */}
            {/* Example: Replace "Luvo Zulu" with user.displayName or user.email */}
            <h2>Luvo Zulu</h2>

            {/* TODO: Replace this static joined date with the actual registration date  (IDK IF WE ACTUALLY NEED THIS) */}
            {/* Example: Format user.metadata.creationTime */}
            <p>Joined 2021</p>

            {/* TODO: Dynamically fetch verification status and user level  (IDK IF WE ACTUALLY NEED THIS) */}
            {/* Example: Show "Verified" badge based on user.verified === true */}
            <span>Verified • Level 2</span>
          </div>
        </div>

        {/* === Profile Tabs (static for now) === */}
        <div className="tab-nav">
          <button className="active" id="">Overview</button>
          <button  id="">Personal Info</button>
          <button id="">Account Settings</button>
          <button id="">Betting Preferences</button>
        </div>

        {/* === Personal Info Form === */}
        <div className="info-section">
          <h3>Personal Information</h3>
          <form className="info-form">
            <label>Email</label>
            {/* TODO: Populate this field with user's email (read-only or editable) */}
            <input type="email" placeholder="Email" id="" />

            <label>Phone</label>
            {/* TODO: Pre-fill with user.phoneNumber if available */}
            <input type="tel" placeholder="Phone" />

            <label>Address</label>
            {/* TODO: Load and allow editing of user.address if stored in DB */}
            <input type="text" placeholder="Address" />

            {/* TODO: Hook this button to a function that updates user data in your backend or Firebase */}
            <button type="submit" className="update-button" id="">Update Information</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
