import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import { onAuthStateChanged, signOut } from "firebase/auth";
// Components
import Login from "./Login";
import Register from "./Register";
// Services
import FirebaseService from "../services/firebase";
// Images 
import logo from "../assets/logo.png";


function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);
  
  useEffect(() => {
    onAuthStateChanged(FirebaseService.auth, (user) => {
      if (user) {
        // Registered
        setIsLoggedIn(true);
        const uid = user.uid;
        //const displayName = user.displayName;
        //const email = user.email;
        //const photoURL = user.photoURL;
        console.log("uid:", uid);
        //console.log("displayName:", displayName);
        //console.log("email:", email);
        //console.log("photoURL:", photoURL);
      } else {
        // Logged out
        setIsLoggedIn(false);
        console.log("the user is logged out");
      };
    }); 
  }, []);

  // Logout
  const handleLogout = () => {               
    signOut(FirebaseService.auth)
      .then(() => {
        // Logged Out successfully
        setIsLoggedIn(false);
        console.log("logged out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="Nav-bar-container">
      <input type="checkbox" className="open-menu-box" />
      {/*-- Logo Navbar --*/}
      <div className="Nav-bar-logo">
        <Link to="/">
          <img className="App-logo" src={logo} alt="logo" />
        </Link>
        {isLoggedIn ? (
        <div className="Login-buttons">
          <button className="User-button" onClick={handleLogout} >
            <Link to="/login" className="App-Link User-button">
              <h5 className="text-dark">Logout</h5>
            </Link>
          </button>
        </div>
        ) : (
        <div className="Login-buttons">
          <Popup trigger={<button className="User-button text-dark fs-5 fw-bold">Login</button>} position="left top">
            <div className="card-btn"><Login /></div>
          </Popup>
          <Popup trigger={<button className="User-button text-dark fs-5 fw-bold">Register</button>} position="left top">
            <div className="card-btn"><Register /></div>
          </Popup>
        </div>
        )}
      </div>
      {/*-- Menu Navbar --*/}
      <div className="Nav-bar-menu">
        <div></div>
        {isLoggedIn ? (
        <div className="Nav-links">
          <Link to="/" className="App-Link">
            <h5 className="Nav-text2">Home</h5>
          </Link>
          <Link to="/form" className="App-Link">
            <h5 className="Nav-text2">Make your Card</h5>
          </Link>
          <Link to="/library-example" className="App-Link">
            <h5 className="Nav-text2">Library</h5>
          </Link>
          <Link to="/profile" className="App-Link">
            <h5 className="Nav-text2">Profile</h5>
          </Link>
          <Link to="/about" className="App-Link">
            <h5 className="Nav-text2">About</h5>
          </Link>
          <Link to="/contact" className="App-Link">
            <h5 className="Nav-text2">Contact Us</h5>
          </Link>
        </div>
        ) : (
        <div className="Nav-links">
          <Link to="/" className="App-Link">
            <h5 className="Nav-text2">Home</h5>
          </Link>
          <Link to="/form" className="App-Link">
            <h5 className="Nav-text2">Make your Card</h5>
          </Link>
          <Link to="/about" className="App-Link">
            <h5 className="Nav-text2">About</h5>
          </Link>
          <Link to="/contact" className="App-Link">
            <h5 className="Nav-text2">Contact Us</h5>
          </Link>
        </div>
        )}
        <div></div>
      </div>
    </div>
  );
};

export default NavBar;
