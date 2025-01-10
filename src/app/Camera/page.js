"use client";
import React, { useRef, useEffect } from "react";

const Camera = () => {
  const videoRef = useRef(null);
  let stream;

  useEffect(() => {
    const getVideo = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
      } catch (error) {
        console.error("Error accessing the camera: ", error);
      }
    };

    getVideo();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("popstate", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handleBeforeUnload);
    };
  }, [stream]);

  return (
    <>
      <div className="camera-container">
        <img src="/scanme.png" className="scan-logo"></img>{" "}
        <h1>AgriAstraX AI Camera</h1>{" "}
        <video ref={videoRef} width="640" height="480" autoPlay></video>{" "}
        <div className="gri"></div>
      </div>
    </>
  );
};

export default Camera;
