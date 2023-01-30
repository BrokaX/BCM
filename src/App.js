import React from "react";
import { Routes, Route } from "react-router-dom";
// CSS
import "./App.css";
// Components
import Read from "./components/others/Read";
import Result from "./components/others/Result";
import Update from "./components/others/Update";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import Form from "./components/Form";
import LibraryExample from "./components/LibraryExample";
import Card from "./components/Card";
import Profile from "./components/Profile";


function App() {
  return (
    <div>
      <NavBar />
      {/*--- Routes ---*/}
      <Routes>
        <Route path="/read" element={<Read />} />
        <Route path="/result" element={<Result />} />
        <Route path="/update" element={<Update />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/library-example" element={<LibraryExample />} />
        <Route path="/library" element={<Card />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
