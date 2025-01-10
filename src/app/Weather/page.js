import React from "react";

const Page = () => {
  return (
    <>
      <div className="grid">
        <div className="first">
          <h3 className="temp">39°C</h3>
          <i className="fa-solid fa-droplet lg"></i>
          <i className="fa-solid fa-wind lg"></i>
          <br />
          <i className="fa-solid fa-cloud-rain lg"></i>
          <i className="fa-solid fa-radiation lg"></i>
        </div>
        <div className="second">
          <i className="fa-solid fa-clock lg"></i>
          <br />
          <i className="fa-solid fa-calendar-days lg"></i>
        </div>
        <div className="third">
          <input
            type="text"
            className="crop"
            placeholder="Enter Crop Name"
          ></input>
          <button className="btn btn-block btn-warning sbut">Search</button>
          <br />
          <div className="data-container"></div>
        </div>
        <div className="fourth">
          <i className="fa-solid fa-smog lg"></i>
          <h2>181</h2>
        </div>
        <div className="fifth">
          <div
            style={{
              display: "block",
              position: "relative",
              maxWidth: "177.778vh",
              margin: "auto",
              padding: "0",
              border: "0",
            }}
          >
            <div
              style={{
                display: "block",
                position: "relative",
                width: "100%",
                height: "0",
                boxSizing: "content-box",
                margin: "0",
                border: "0",
                padding: "0 0 56.25%",
                left: "0",
                top: "0",
                right: "0",
                bottom: "0",
              }}
            >
              <iframe
                src="https://embed.ventusky.com/?p=20.1;80.0;3&l=gust"
                style={{
                  display: "block",
                  position: "absolute",
                  left: "0",
                  top: "0",
                  width: "100%",
                  height: "90%",
                  margin: "0",
                  padding: "0",
                  border: "0",
                  right: "auto",
                  bottom: "auto",
                }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="sixth">
          <canvas id="myChart"></canvas>
        </div>
        <div className="seventh">
          <img
            src="https://th.bing.com/th/id/R.aec4217a0bfe523d9896f05b3469933b?rik=fcKXyqU0Ji2rIA&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2017%2f05%2fAlert-PNG-Image-File.png&ehk=%2fKeMPEEDgoj3XAS9ebCypJca0g4jY2t%2bmbqhV8O99Ic%3d&risl=&pid=ImgRaw&r=0"
            className="alert"
          />
        </div>
        <div className="eighth"></div>
        <div className="ninth"></div>
      </div>
    </>
  );
};

export default Page;
