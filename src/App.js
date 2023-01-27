import React from "react";
import { Routes, Route } from "react-router-dom";
// CSS
import "./App.css";
// Components
import Read from "./components/Read";
import Result from "./components/Result";
import Update from "./components/Update";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import Form from "./components/Form";
import Register from "./components/Register";
import Login from "./components/Login";
import User from "./components/User";
import Profile from "./components/Profile";

function App() {
  return (
    <div>
      <NavBar/>
      {/*--- Routes ---*/}
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/form" element={<Form/>} />
        <Route path="/read" element={<Read/>} />
        <Route path="/result" element={<Result/>} />
        <Route path="/update" element={<Update/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/user" element={<User/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </div>
  );
};

export default App;
