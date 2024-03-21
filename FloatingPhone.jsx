import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { PieChart } from "react-minimal-pie-chart";
import { MdCameraAlt, MdHome, MdPersonOutline } from "react-icons/md";
import "./FloatingPhone.css";
import { CameraScreen } from "./CameraScreen";
import { ProfileScreen } from "./ProfileScreen";
const dataMock = [
  { title: "Proteins", value: 25, color: "#acd1c0" },
  { title: "Greens", value: 20, color: "#ddd4b7" },
  { title: "Calories", value: 30, color: "#deb887" },
  { title: "Fat", value: 25, color: "#201e21" },
];

export default function FloatingPhone() {
  const [showCamera, setShowCamera] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="floating-phone">
      <div className="screen">
        {showCamera && <CameraScreen />}
        {showProfile && <ProfileScreen />}
        {!showCamera && !showProfile && (
          <div className="chart-container">
            <PieChart data={dataMock} radius={40} lineWidth={50} animate />
            <div className="labels-container">
              {dataMock.map((item, index) => (
                <div key={index} className="bar-chart-container">
                  <span>{item.title}</span>
                  <progress
                    data-title={item.title}
                    value={item.value}
                    max="100"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="nav-bar">
          <MdCameraAlt
            className="icon"
            onClick={() => {
              setShowCamera(true);
              setShowProfile(false);
            }}
          />
          <MdHome
            className="icon"
            onClick={() => {
              setShowCamera(false);
              setShowProfile(false);
            }}
          />
          <MdPersonOutline
            className="icon"
            onClick={() => {
              setShowCamera(false);
              setShowProfile(true);
            }}
          />
        </div>
      </div>
    </div>
  );
}
