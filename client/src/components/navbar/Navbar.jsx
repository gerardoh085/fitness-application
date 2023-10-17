import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [clicked, SetClicked] = useState(false);

  const HandleMobileMenu = () => {
    return (
      <>
        <div className="toggleScreen">
          <div className="btnContainer">
            <div>
              <svg
                className="btn-toggler"
                onClick={() => {
                  SetClicked((prev) => {
                    return !prev;
                  });
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z" />
              </svg>
            </div>
          </div>
          <div className="toggle-container">
            <div className="toggle-lists">
              <div className="link-path">
                <a href="#">Home</a>
              </div>
              <div className="link-path">
                <a href="#">Workouts</a>
              </div>
              <div className="link-path">
                <a href="#">Exercises</a>
              </div>
              <div className="link-path">
                <a href="#">Progress</a>
              </div>
              <div className="link-path">
                <a href="#">Journal</a>
              </div>
              <div className="link-path">
                <a href="#">Nutrition</a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <header className="header-container">
        <div className="navbar-container">
          <div className="logo-container">
            <img
              className="img-icon-barbell"
              src="src\assets\icons8-weightlifting-64.png"
            ></img>
          </div>
          <div className="link-paths">
            <div>Home</div>
            <div>Workouts</div>
            <div>Exercises</div>
            <div>Progress</div>
            <div>Journal</div>
            <div>Nutrition</div>
          </div>
          <div className="user-info-container">
            <button className="btn-su">Sign Up</button>
            <button className="btn-li">Login</button>
            <svg
              className="user-icon-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" />
            </svg>
          </div>
          <div className="toggler-container">
            <svg
              className="btn-toggler"
              onClick={() => {
                SetClicked((prev) => {
                  return !prev;
                });
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
            </svg>
          </div>
        </div>
      </header>
      {clicked === true ? <HandleMobileMenu></HandleMobileMenu> : <></>}
    </>
  );
};

export default Navbar;
