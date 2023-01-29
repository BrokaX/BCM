import React from "react";
import { Routes, Route } from "react-router-dom";
// CSS
import "./App.css";
// Components
import Read from "./components/others/Read";
import Result from "./components/others/Result";
import Update from "./components/others/Update";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import Form from "./components/Form";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
//import Library from "./components/Library";

function App() {
  return (
    <div>
      <NavBar />
      {/*--- Routes ---*/}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/read" element={<Read />} />
        <Route path="/result" element={<Result />} />
        <Route path="/update" element={<Update />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        {/*<Route path="/library" element={<Library />} />*/}
      </Routes>
    </div>
  );
}

export default App;
