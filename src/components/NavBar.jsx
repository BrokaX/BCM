import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
// Services
import FirebaseService from "../services/firebase";
// Images 
import logo from "../assets/logo.png";
import logoBanner from "../assets/logo-banner.png"

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);
  
  useEffect(() => {
    onAuthStateChanged(FirebaseService.auth, (user) => {
      if (user) {
        // Registered
        //const displayName = user.displayName;
        //const email = user.email;
        //const photoURL = user.photoURL;
        setIsLoggedIn(true);
        const uid = user.uid;
        console.log("uid:", uid);
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
            <Link  style={{color: 'black' , fontSize:'18px', background:'none'}} to="/login" className="App-Link User-button">
              Logout
            </Link>
          </button>
        </div>
        ) : (
        <div className="Login-buttons">
          <button className="User-button">
            <Link  style={{color: 'black' , fontSize:'18px', background:'none'}} to="/login" className="App-Link">
              <h5>Login</h5> 
            </Link>
          </button>
          <button className="User-button">
            <Link  style={{color: 'black' , fontSize:'18px', background:'none'}} to="/register" className="App-Link">
              <h5 className="text-dark">Register</h5>
            </Link>
          </button>
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
            <h5 className="Nav-text2">Create Card</h5>
          </Link>
          <Link to="/library" className="App-Link">
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
        <div><img className="logo-banner" src={logoBanner} alt="logo banner" /></div>
      </div>
    </div>
  );
};

export default NavBar;
