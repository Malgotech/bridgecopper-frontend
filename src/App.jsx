import React, { useState } from "react";
import "./App.css";
import "./assets/style/Common.scss";
import "./assets/font/font.css";
import { Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import ContactForm from "./components/ui/ContactForm/ContactForm";

function App() {
  const [thirdSectionActive, setThirdSectionActive] = useState(false);
  const [contactModal, setContactModal] = useState(false);

  const handleContactModal = () => {
    setContactModal(true);
  };

  return (
    <>
      <div className="app">
        <Navbar
          setThirdSectionActive={setThirdSectionActive}
          handleContactModal={handleContactModal}
        />
        <main className="routes-div">
          <Routes>
            <Route
              path="/"
              element={
                <Homepage
                  isActive={thirdSectionActive}
                  handleContactModal={handleContactModal}
                />
              }
            />
          </Routes>
        </main>
        <Footer handleContactModal={handleContactModal} />
      </div>
      <ContactForm
        show={contactModal}
        handleClose={() => setContactModal(false)}
      />
    </>
  );
}

export default App;
