import React from "react";
import Typical from "react-typical";
import './Profile.css';
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="#">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Vishwas</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primaty-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthisiastic Dev 🕶 ",
                    1000,
                    "Front-End Developer 👨‍💻",
                    1000,
                    "Machine Learning Engineer 💼",
                    1000,
                    "React Developer 😎",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a href="pasteyourresumeinpublicfolder" download="myresume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
