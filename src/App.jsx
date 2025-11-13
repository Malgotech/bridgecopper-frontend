import React, { useState } from "react";
import "./App.css";
import "./assets/style/Common.scss";
import "./assets/font/font.css";
import './i18n';
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
           contactModal={contactModal}
        setContactModal={setContactModal}
          setThirdSectionActive={setThirdSectionActive}
          handleContactModal={handleContactModal}
        />
        <main className="routes-div">
          <Routes>
            <Route
              path="/"
              element={
                <Homepage
                contactModal={contactModal}
                  isActive={thirdSectionActive}
                  handleContactModal={handleContactModal}
                  setContactModal={setContactModal}
                />
              }
            />
          </Routes>
        </main>
        <Footer  setContactModal={setContactModal}  contactModal={contactModal}  handleContactModal={handleContactModal} />
      </div>

      
      {/* <ContactForm
        show={contactModal}
        handleClose={() => setContactModal(false)}
      /> */}

    </>
  );
}

export default App;
