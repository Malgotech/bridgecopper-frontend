import React from "react";
import "./App.css";
import "./assets/style/Common.scss";
import "./assets/font/font.css"
import { Route, Routes } from "react-router-dom";
 
import Homepage from "./pages/Homepage/Homepage";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";

function App() {

  return (
   <div className="app">
      <Navbar/>
      <main className="routes-div">
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
