import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
export default function NavBar() {
  return (
    <div>
      <input type="checkbox" className="open-menu-box" />
      <div className="Nav-bar">
        <Link className="App-Link" to="/">
          <img className="App-logo" src={logo} alt="" />
        </Link>
        <div className="Nav-links">
          <Link to="" className="App-Link">
            <h3 className="Nav-text">About</h3>
          </Link>
          <Link className="App-Link">
            <h3 className="Nav-text">Products</h3>
          </Link>
          <Link to="" className="App-Link">
            <h3 className="Nav-text">Contact</h3>
          </Link>
          <Link className="App-Link">
            <h3 className="Nav-text">Sign-In</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
