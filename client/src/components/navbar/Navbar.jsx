import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [clicked, SetClicked] = useState(false);

  const HandleMobileMenu = () => {
    return (
      <>
        <div className="toggleScreen">
          <button
            className="btn-toggler"
            onClick={() => {
              SetClicked((prev) => {
                return !prev;
              });
            }}
            style={{ width: 200 }}
          >
            Tab
          </button>
          <div className="toggle-container">
            <div>Home</div>
            <div>Workouts</div>
            <div>Exercises</div>
            <div>Progress</div>
            <div>Journal</div>
            <div>Nutrition</div>
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
        </div>
        <button
          className="btn-toggler"
          onClick={() => {
            SetClicked((prev) => {
              return !prev;
            });
          }}
          style={{ width: 200 }}
        >
          Tab
        </button>
      </header>
      {clicked === true ? <HandleMobileMenu></HandleMobileMenu> : <></>}
    </>
  );
};

export default Navbar;
