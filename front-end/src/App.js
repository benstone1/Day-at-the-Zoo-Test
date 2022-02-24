import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import React, { useEffect, useState } from "react";
import axios from "axios";

// Pages
import MainPage from "./Pages/MainPage";
import SecondaryPage from "./Pages/SecondaryPage";

function App() {
  const [reply, setReply] = useState("");

  useEffect(() => {
    const accessServer = async () => {
      try {
        const res = await axios.get("https://zoo-planner.herokuapp.com");
        // const res = await axios.get("http://localhost:3001");
        setReply(res.data);
      } catch (err) {
        console.log("Error Returned from acessServer Request: ", err);
      }
    };
    accessServer();
  }, []);

  return (
    <div>
      <h1>{reply}</h1>
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/planner" element={<SecondaryPage />}></Route>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
