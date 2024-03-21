import React, { useRef } from "react";
import Webcam from "react-webcam";
import { MdCameraAlt } from "react-icons/md";
import "./CameraScreen.css";

export const CameraScreen = () => {
  const webcamRef = useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc); // this would log the captured image as base64, you can save it or show it somewhere
  }, [webcamRef]);

  return (
    <div className="screen-inner">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        className="webcam"
      />
      <button className="capture-btn" onClick={capture}>
        <MdCameraAlt size={30} />
      </button>
    </div>
  );
};
