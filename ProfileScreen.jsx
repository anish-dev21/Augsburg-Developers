import "./ProfileScreen.css";

export const ProfileScreen = () => (
  <div className="profile-screen">
    <h1>User Profile</h1>
    <div className="info-container">
      <div className="profile-item">
        <h4>Login Streaks:</h4>
        <p># days</p>
      </div>
      <div className="profile-item">
        <h4>Current League:</h4>
        <p>Your current league</p>
      </div>
      <div className="profile-item">
        <h4>Weight Unit:</h4>
        <p>Your selected weight unit</p>
      </div>

      <button className="logout-btn">Logout</button>
    </div>
  </div>
);
