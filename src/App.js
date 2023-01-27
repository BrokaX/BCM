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

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/form" element={<Form/>} />
        <Route path="/read" element={<Read/>} />
        <Route path="/result" element={<Result/>} />
        <Route path="/update" element={<Update/>} />
      </Routes>
    </div>
  );
}

export default App;
