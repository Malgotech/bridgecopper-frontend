import React, { useState, useRef, useEffect } from "react";
import Style from "./ContactForm.module.scss";
import { Modal } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import contactImg from "../../../assets/images/contact-image.png";
import { IoIosArrowDown } from "react-icons/io";

const countries = ["USA", "India", "UK", "Canada", "Australia"];
const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ContactForm = ({ show, handleClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select Country");
  const dropdownRef = useRef(null);
  const [isQuantityOpen, setIsQuantityOpen] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState("Select Quantity");
  const quantityRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleClickOutsideQuantity = (event) => {
      if (quantityRef.current && !quantityRef.current.contains(event.target)) {
        setIsQuantityOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutsideQuantity);
    return () =>
      document.removeEventListener("mousedown", handleClickOutsideQuantity);
  }, []);

  const handleSelect = (country) => {
    setSelected(country);
    setIsOpen(false);
  };
  const handleSelectQuantity = (qty) => {
    setSelectedQuantity(qty);
    setIsQuantityOpen(false);
  };

  const handleOpenQuantity = () => {
    setIsQuantityOpen((prev) => !prev);
    setIsOpen(false);
  };

  return (
    <Modal
      show={show}
      centered
      size="lg"
      dialogClassName={`contact-modal ${Style.contact_modal}`}>
      <Modal.Body className={Style.contact_body_wrapper}>
        <button className={Style.btn_close} onClick={handleClose}>
          <span>
            <IoClose />
          </span>
        </button>
        <img src={contactImg} alt="contact" width={334} height={546} className="tab-hide mobile-hide" />

        <div className={Style.contact_body_right}>
          <h2 className={Style.h_text_1}>
            Copper from the Source, Delivered Worldwide
          </h2>
          <p className={Style.p_text_1}>
            Connect with Bridge Copper to secure a steady flow of high-quality
            copper concentrates, directly from Chile’s world-leading mines.
          </p>

          <form className={Style.contact_form}>
            <div className={Style.input_container}>
              <label htmlFor="name" className={Style.label}>
                Full Name
              </label>

              <input
                type="text"
                className={Style.form_control}
                placeholder="Full Name"
              />
            </div>
            <div className={Style.input_container}>
              <label htmlFor="name" className={Style.label}>
                Company Name
              </label>

              <input
                type="text"
                className={Style.form_control}
                placeholder="Company Name"
              />
            </div>
            <div className={Style.input_container}>
              <label htmlFor="name" className={Style.label}>
                Business Email
              </label>

              <input
                type="text"
                className={Style.form_control}
                placeholder="Business Email"
              />
            </div>
            <div className={Style.input_container}>
              <label htmlFor="name" className={Style.label}>
                Contact Number
              </label>

              <div className={Style.input_group}>
                <span>+41</span>
                <input
                  type="text"
                  className={Style.form_control_contact}
                  placeholder="0000000000"
                />
              </div>
            </div>

            <div className={Style.input_container}>
              <label htmlFor="name" className={Style.label}>
                Country
              </label>

              <div className={Style.dropdown} ref={dropdownRef}>
                <button
                  className={Style.btn_drop}
                  type="button"
                  onClick={() => setIsOpen((prev) => !prev)}>
                  {selected}{" "}
                  <IoIosArrowDown
                    className={Style.arrow}
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "0.3s",
                    }}
                  />
                </button>

                {isOpen && (
                  <ul className={Style.dropdown_menu}>
                    {countries.map((country) => (
                      <li
                        key={country}
                        className={Style.dropdown_item}
                        onClick={() => handleSelect(country)}>
                        {country}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className={Style.input_container}>
              <label htmlFor="name" className={Style.label}>
                ⁠Monthly Copper Concentrate Demand
              </label>

              <div className={Style.dropdown} ref={quantityRef}>
                <button
                  className={Style.btn_drop}
                  type="button"
                  onClick={handleOpenQuantity}>
                  {selectedQuantity}{" "}
                  <IoIosArrowDown
                    className={Style.arrow}
                    style={{
                      transform: isQuantityOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      transition: "0.3s",
                    }}
                  />
                </button>

                {isQuantityOpen && (
                  <ul className={Style.dropdown_menu}>
                    {quantities.map((qty) => (
                      <li
                        key={qty}
                        className={Style.dropdown_item}
                        onClick={() => handleSelectQuantity(qty)}>
                        {qty}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <button className={Style.btn_submit}>
              <span>Submit</span>
            </button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ContactForm;
