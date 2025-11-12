import React, { useState, useRef, useEffect, useMemo } from "react";
import Style from "./ContactForm.module.scss";
import { Modal } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import contactImg from "../../../assets/images/contact-image.png";
import { IoIosArrowDown } from "react-icons/io";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo, Democratic Republic of the",
  "Congo, Republic of the",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor-Leste)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar (Burma)",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const countryPhoneCodes = [
  { name: "Afghanistan", code: "+93" },
  { name: "Albania", code: "+355" },
  { name: "Algeria", code: "+213" },
  { name: "Andorra", code: "+376" },
  { name: "Angola", code: "+244" },
  { name: "Antigua and Barbuda", code: "+1-268" },
  { name: "Argentina", code: "+54" },
  { name: "Armenia", code: "+374" },
  { name: "Australia", code: "+61" },
  { name: "Austria", code: "+43" },
  { name: "Azerbaijan", code: "+994" },
  { name: "Bahamas", code: "+1-242" },
  { name: "Bahrain", code: "+973" },
  { name: "Bangladesh", code: "+880" },
  { name: "Barbados", code: "+1-246" },
  { name: "Belarus", code: "+375" },
  { name: "Belgium", code: "+32" },
  { name: "Belize", code: "+501" },
  { name: "Benin", code: "+229" },
  { name: "Bhutan", code: "+975" },
  { name: "Bolivia", code: "+591" },
  { name: "Bosnia and Herzegovina", code: "+387" },
  { name: "Botswana", code: "+267" },
  { name: "Brazil", code: "+55" },
  { name: "Brunei", code: "+673" },
  { name: "Bulgaria", code: "+359" },
  { name: "Burkina Faso", code: "+226" },
  { name: "Burundi", code: "+257" },
  { name: "Cabo Verde", code: "+238" },
  { name: "Cambodia", code: "+855" },
  { name: "Cameroon", code: "+237" },
  { name: "Canada", code: "+1" },
  { name: "Central African Republic", code: "+236" },
  { name: "Chad", code: "+235" },
  { name: "Chile", code: "+56" },
  { name: "China", code: "+86" },
  { name: "Colombia", code: "+57" },
  { name: "Comoros", code: "+269" },
  { name: "Congo (DRC)", code: "+243" },
  { name: "Congo (Republic)", code: "+242" },
  { name: "Costa Rica", code: "+506" },
  { name: "Croatia", code: "+385" },
  { name: "Cuba", code: "+53" },
  { name: "Cyprus", code: "+357" },
  { name: "Czechia", code: "+420" },
  { name: "Denmark", code: "+45" },
  { name: "Djibouti", code: "+253" },
  { name: "Dominica", code: "+1-767" },
  { name: "Dominican Republic", code: "+1-809" },
  { name: "Ecuador", code: "+593" },
  { name: "Egypt", code: "+20" },
  { name: "El Salvador", code: "+503" },
  { name: "Equatorial Guinea", code: "+240" },
  { name: "Eritrea", code: "+291" },
  { name: "Estonia", code: "+372" },
  { name: "Eswatini", code: "+268" },
  { name: "Ethiopia", code: "+251" },
  { name: "Fiji", code: "+679" },
  { name: "Finland", code: "+358" },
  { name: "France", code: "+33" },
  { name: "Gabon", code: "+241" },
  { name: "Gambia", code: "+220" },
  { name: "Georgia", code: "+995" },
  { name: "Germany", code: "+49" },
  { name: "Ghana", code: "+233" },
  { name: "Greece", code: "+30" },
  { name: "Grenada", code: "+1-473" },
  { name: "Guatemala", code: "+502" },
  { name: "Guinea", code: "+224" },
  { name: "Guinea-Bissau", code: "+245" },
  { name: "Guyana", code: "+592" },
  { name: "Haiti", code: "+509" },
  { name: "Honduras", code: "+504" },
  { name: "Hungary", code: "+36" },
  { name: "Iceland", code: "+354" },
  { name: "India", code: "+91" },
  { name: "Indonesia", code: "+62" },
  { name: "Iran", code: "+98" },
  { name: "Iraq", code: "+964" },
  { name: "Ireland", code: "+353" },
  { name: "Israel", code: "+972" },
  { name: "Italy", code: "+39" },
  { name: "Jamaica", code: "+1-876" },
  { name: "Japan", code: "+81" },
  { name: "Jordan", code: "+962" },
  { name: "Kazakhstan", code: "+7" },
  { name: "Kenya", code: "+254" },
  { name: "Kiribati", code: "+686" },
  { name: "Kuwait", code: "+965" },
  { name: "Kyrgyzstan", code: "+996" },
  { name: "Laos", code: "+856" },
  { name: "Latvia", code: "+371" },
  { name: "Lebanon", code: "+961" },
  { name: "Lesotho", code: "+266" },
  { name: "Liberia", code: "+231" },
  { name: "Libya", code: "+218" },
  { name: "Liechtenstein", code: "+423" },
  { name: "Lithuania", code: "+370" },
  { name: "Luxembourg", code: "+352" },
  { name: "Madagascar", code: "+261" },
  { name: "Malawi", code: "+265" },
  { name: "Malaysia", code: "+60" },
  { name: "Maldives", code: "+960" },
  { name: "Mali", code: "+223" },
  { name: "Malta", code: "+356" },
  { name: "Marshall Islands", code: "+692" },
  { name: "Mauritania", code: "+222" },
  { name: "Mauritius", code: "+230" },
  { name: "Mexico", code: "+52" },
  { name: "Micronesia", code: "+691" },
  { name: "Moldova", code: "+373" },
  { name: "Monaco", code: "+377" },
  { name: "Mongolia", code: "+976" },
  { name: "Montenegro", code: "+382" },
  { name: "Morocco", code: "+212" },
  { name: "Mozambique", code: "+258" },
  { name: "Myanmar", code: "+95" },
  { name: "Namibia", code: "+264" },
  { name: "Nauru", code: "+674" },
  { name: "Nepal", code: "+977" },
  { name: "Netherlands", code: "+31" },
  { name: "New Zealand", code: "+64" },
  { name: "Nicaragua", code: "+505" },
  { name: "Niger", code: "+227" },
  { name: "Nigeria", code: "+234" },
  { name: "North Macedonia", code: "+389" },
  { name: "Norway", code: "+47" },
  { name: "Oman", code: "+968" },
  { name: "Pakistan", code: "+92" },
  { name: "Palau", code: "+680" },
  { name: "Palestine", code: "+970" },
  { name: "Panama", code: "+507" },
  { name: "Papua New Guinea", code: "+675" },
  { name: "Paraguay", code: "+595" },
  { name: "Peru", code: "+51" },
  { name: "Philippines", code: "+63" },
  { name: "Poland", code: "+48" },
  { name: "Portugal", code: "+351" },
  { name: "Qatar", code: "+974" },
  { name: "Romania", code: "+40" },
  { name: "Russia", code: "+7" },
  { name: "Rwanda", code: "+250" },
  { name: "Saint Kitts and Nevis", code: "+1-869" },
  { name: "Saint Lucia", code: "+1-758" },
  { name: "Saint Vincent and the Grenadines", code: "+1-784" },
  { name: "Samoa", code: "+685" },
  { name: "San Marino", code: "+378" },
  { name: "Sao Tome and Principe", code: "+239" },
  { name: "Saudi Arabia", code: "+966" },
  { name: "Senegal", code: "+221" },
  { name: "Serbia", code: "+381" },
  { name: "Seychelles", code: "+248" },
  { name: "Sierra Leone", code: "+232" },
  { name: "Singapore", code: "+65" },
  { name: "Slovakia", code: "+421" },
  { name: "Slovenia", code: "+386" },
  { name: "Solomon Islands", code: "+677" },
  { name: "Somalia", code: "+252" },
  { name: "South Africa", code: "+27" },
  { name: "South Korea", code: "+82" },
  { name: "South Sudan", code: "+211" },
  { name: "Spain", code: "+34" },
  { name: "Sri Lanka", code: "+94" },
  { name: "Sudan", code: "+249" },
  { name: "Suriname", code: "+597" },
  { name: "Sweden", code: "+46" },
  { name: "Switzerland", code: "+41" },
  { name: "Syria", code: "+963" },
  { name: "Taiwan", code: "+886" },
  { name: "Tajikistan", code: "+992" },
  { name: "Tanzania", code: "+255" },
  { name: "Thailand", code: "+66" },
  { name: "Timor-Leste", code: "+670" },
  { name: "Togo", code: "+228" },
  { name: "Tonga", code: "+676" },
  { name: "Trinidad and Tobago", code: "+1-868" },
  { name: "Tunisia", code: "+216" },
  { name: "Turkey", code: "+90" },
  { name: "Turkmenistan", code: "+993" },
  { name: "Tuvalu", code: "+688" },
  { name: "Uganda", code: "+256" },
  { name: "Ukraine", code: "+380" },
  { name: "United Arab Emirates", code: "+971" },
  { name: "United Kingdom", code: "+44" },
  { name: "United States", code: "+1" },
  { name: "Uruguay", code: "+598" },
  { name: "Uzbekistan", code: "+998" },
  { name: "Vanuatu", code: "+678" },
  { name: "Vatican City", code: "+379" },
  { name: "Venezuela", code: "+58" },
  { name: "Vietnam", code: "+84" },
  { name: "Yemen", code: "+967" },
  { name: "Zambia", code: "+260" },
  { name: "Zimbabwe", code: "+263" },
];

const countryPhoneLengths = {
  // 1-digit country codes
  "+7": 10, // Russia (and Kazakhstan, variable 10-11)
  "+20": 8, // Egypt
  "+27": 9, // South Africa
  "+30": 10, // Greece
  "+31": 9, // Netherlands
  "+32": 9, // Belgium
  "+33": 9, // France
  "+34": 9, // Spain
  "+39": 10, // Italy
  "+41": 9, // Switzerland
  "+43": 10, // Austria
  "+44": 10, // United Kingdom
  "+45": 8, // Denmark
  "+46": 9, // Sweden
  "+47": 8, // Norway
  "+48": 9, // Poland
  "+49": 10, // Germany
  "+51": 9, // Peru
  "+52": 10, // Mexico
  "+53": 8, // Cuba
  "+54": 10, // Argentina (variable 10-13)
  "+55": 11, // Brazil
  "+56": 9, // Chile
  "+57": 10, // Colombia
  "+58": 10, // Venezuela
  "+60": 10, // Malaysia (variable 9-11)
  "+61": 9, // Australia
  "+62": 10, // Indonesia (variable 10-12)
  "+63": 10, // Philippines
  "+64": 8, // New Zealand (variable 7-8)
  "+65": 8, // Singapore
  "+66": 9, // Thailand
  "+81": 10, // Japan (variable 9-10)
  "+82": 11, // South Korea (landline 9-10, mobile 10-11)
  "+84": 10, // Vietnam
  "+86": 11, // China (variable 10-12)

  // 2-digit country codes
  "+1": 10, // USA, Canada, and other NANP countries (e.g., +1-XXX-XXX-XXXX)
  "+91": 10, // India
  "+92": 10, // Pakistan
  "+93": 9, // Afghanistan
  "+94": 9, // Sri Lanka
  "+95": 11, // Myanmar
  "+98": 10, // Iran
  "+212": 9, // Morocco
  "+213": 9, // Algeria
  "+216": 8, // Tunisia
  "+218": 10, // Libya
  "+220": 7, // Gambia
  "+221": 9, // Senegal
  "+222": 8, // Mauritania
  "+223": 8, // Mali
  "+224": 9, // Guinea
  "+225": 8, // Côte d'Ivoire
  "+226": 8, // Burkina Faso
  "+227": 8, // Niger
  "+228": 8, // Togo
  "+229": 8, // Benin
  "+230": 7, // Mauritius
  "+231": 7, // Liberia
  "+232": 8, // Sierra Leone
  "+233": 9, // Ghana
  "+234": 10, // Nigeria
  "+235": 8, // Chad
  "+236": 8, // Central African Republic
  "+237": 9, // Cameroon
  "+238": 7, // Cape Verde
  "+239": 7, // São Tomé and Príncipe
  "+240": 9, // Equatorial Guinea
  "+241": 7, // Gabon
  "+242": 7, // Republic of the Congo
  "+243": 9, // DR Congo
  "+244": 9, // Angola
  "+245": 7, // Guinea-Bissau
  "+246": 7, // British Indian Ocean Territory
  "+248": 7, // Seychelles
  "+249": 9, // Sudan
  "+250": 9, // Rwanda
  "+251": 9, // Ethiopia
  "+252": 8, // Somalia
  "+253": 8, // Djibouti
  "+254": 9, // Kenya
  "+255": 9, // Tanzania
  "+256": 9, // Uganda
  "+257": 8, // Burundi
  "+258": 9, // Mozambique
  "+260": 9, // Zambia
  "+261": 10, // Madagascar
  "+262": 8, // Mayotte/Reunion
  "+263": 9, // Zimbabwe
  "+264": 8, // Namibia
  "+265": 9, // Malawi
  "+266": 8, // Lesotho
  "+267": 8, // Botswana
  "+268": 8, // Eswatini
  "+269": 7, // Comoros
  "+290": 4, // Saint Helena (variable 4-5)
  "+291": 7, // Eritrea
  "+297": 7, // Aruba
  "+298": 6, // Faroe Islands
  "+299": 6, // Greenland
  "+350": 8, // Gibraltar
  "+351": 9, // Portugal
  "+352": 9, // Luxembourg
  "+353": 9, // Ireland
  "+354": 7, // Iceland
  "+355": 9, // Albania
  "+356": 8, // Malta
  "+357": 8, // Cyprus
  "+358": 10, // Finland (variable 9-10)
  "+359": 9, // Bulgaria
  "+370": 8, // Lithuania
  "+371": 8, // Latvia
  "+372": 8, // Estonia
  "+373": 8, // Moldova
  "+374": 8, // Armenia
  "+375": 9, // Belarus
  "+376": 6, // Andorra
  "+377": 8, // Monaco
  "+378": 13, // San Marino
  "+380": 9, // Ukraine
  "+381": 9, // Serbia
  "+382": 8, // Montenegro
  "+383": 8, // Kosovo
  "+385": 9, // Croatia
  "+386": 8, // Slovenia
  "+387": 8, // Bosnia and Herzegovina
  "+389": 8, // North Macedonia
  "+420": 9, // Czech Republic
  "+421": 9, // Slovakia
  "+423": 7, // Liechtenstein
  "+500": 5, // Falkland Islands (variable 5-7)
  "+501": 7, // Belize
  "+502": 8, // Guatemala
  "+503": 8, // El Salvador
  "+504": 8, // Honduras
  "+505": 8, // Nicaragua
  "+506": 8, // Costa Rica
  "+507": 8, // Panama
  "+508": 6, // Saint Pierre and Miquelon
  "+509": 8, // Haiti
  "+590": 9, // Guadeloupe/St. Barthélemy/St. Martin
  "+591": 9, // Bolivia
  "+592": 7, // Guyana
  "+593": 9, // Ecuador
  "+594": 9, // French Guiana
  "+595": 9, // Paraguay
  "+596": 10, // Martinique
  "+597": 6, // Suriname
  "+598": 8, // Uruguay
  "+599": 7, // Curaçao/Sint Maarten/Bonaire
  "+670": 8, // Timor-Leste
  "+671": 7, // Guam (now uses +1)
  "+672": 6, // Norfolk Island/Antarctica
  "+673": 7, // Brunei
  "+674": 7, // Nauru
  "+675": 8, // Papua New Guinea
  "+676": 5, // Tonga
  "+677": 7, // Solomon Islands
  "+678": 7, // Vanuatu
  "+679": 7, // Fiji
  "+680": 7, // Palau
  "+681": 6, // Wallis and Futuna
  "+682": 5, // Cook Islands
  "+683": 5, // Niue
  "+685": 5, // Samoa
  "+686": 5, // Kiribati
  "+687": 6, // New Caledonia
  "+688": 5, // Tuvalu
  "+690": 5, // Tokelau
  "+691": 7, // Micronesia
  "+692": 7, // Marshall Islands
  "+850": 8, // North Korea
  "+852": 8, // Hong Kong
  "+853": 8, // Macau
  "+855": 9, // Cambodia
  "+856": 9, // Laos
  "+880": 10, // Bangladesh
  "+886": 9, // Taiwan
  "+960": 7, // Maldives
  "+961": 8, // Lebanon
  "+962": 9, // Jordan
  "+963": 9, // Syria
  "+964": 10, // Iraq
  "+965": 8, // Kuwait
  "+966": 9, // Saudi Arabia
  "+967": 9, // Yemen
  "+968": 8, // Oman
  "+970": 9, // Palestine
  "+971": 9, // United Arab Emirates
  "+972": 9, // Israel
  "+973": 8, // Bahrain
  "+974": 8, // Qatar
  "+975": 8, // Bhutan
  "+976": 8, // Mongolia
  "+977": 10, // Nepal
  "+992": 9, // Tajikistan
  "+993": 8, // Turkmenistan
  "+994": 9, // Azerbaijan
  "+995": 9, // Georgia
  "+996": 9, // Kyrgyzstan
  "+998": 9, // Uzbekistan

  // 3-digit country codes (examples for major ones)
  "+1242": 7, // Bahamas
  "+1246": 7, // Barbados
  "+1264": 7, // Anguilla
  "+1268": 7, // Antigua and Barbuda
  "+1284": 7, // British Virgin Islands
  "+1340": 7, // US Virgin Islands
  "+1345": 7, // Cayman Islands
  "+1441": 7, // Bermuda
  "+1473": 7, // Grenada
  "+1649": 7, // Turks and Caicos
  "+1664": 7, // Montserrat
  "+1671": 7, // Northern Mariana Islands (now uses +1)
  "+1684": 7, // American Samoa (now uses +1)
  "+1721": 7, // Sint Maarten
  "+1758": 7, // Saint Lucia
  "+1767": 7, // Dominica
  "+1784": 7, // Saint Vincent and the Grenadines
  "+1787": 10, // Puerto Rico (uses +1 format)
  "+1809": 10, // Dominican Republic (uses +1 format)
  "+1868": 7, // Trinidad and Tobago
  "+1869": 7, // Saint Kitts and Nevis
  "+1876": 7, // Jamaica
  "+1939": 10, // Puerto Rico (alternate, uses +1 format)
  "+210": 5, // South Sudan (variable)
  "+233": 9, // Ghana (already listed)
  // ... (add more as needed for specific 3xx+ codes)

  // Add comments for countries with notes
  // "+1": "NANP countries (e.g., USA, Canada) - 10 digits total after code",
  // "+44": "UK - 10 digits, includes mobile starting with 07"
};

const ContactForm = ({ show, handleClose }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select Country");
  const dropdownRef = useRef(null);

const [searchTerm, setSearchTerm] = useState("");
  const [selectedCodeState, setSelectedCodeState] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

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
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (country) => {
    setSelected(country);
    setIsOpen(false);
  };

 

const filteredCountries = useMemo(() => {
  const term = searchTerm.trim().toLowerCase();
  if (!term) return countryPhoneCodes;

  return countryPhoneCodes.filter((item) => {
    const searchableText = `${item.name} ${item.code}`.toLowerCase();
    
    // Simple fuzzy search - matches characters in order but not necessarily consecutive
    let termIndex = 0;
    for (let i = 0; i < searchableText.length && termIndex < term.length; i++) {
      if (searchableText[i] === term[termIndex]) {
        termIndex++;
      }
    }
    return termIndex === term.length;
  });
}, [searchTerm]);

  const handlePhoneChange = (e) => {
    const maxLength = countryPhoneLengths[selectedCodeState] || 10;
    const value = e.target.value.replace(/\D/g, ""); 
    setPhoneNumber(value.slice(0, maxLength));
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
        <img
          src={contactImg}
          alt="contact"
          width={334}
          height={546}
          className="tab-hide mobile-hide"
        />

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

              {/* <div className={Style.input_group}>
                <span>+41</span>
                <input
                  type="text"
                  className={Style.form_control_contact}
                  placeholder="0000000000"
                />
              </div> */}

              <div className={Style.phone_number_container}>
                <div className={Style.phone_dropdown} ref={menuRef}>
                  <button
                    className={Style.btn_drop_phone}
                    onClick={() => setMenuOpen((prev) => !prev)}>
                    {selectedCodeState}{" "}
                    <IoIosArrowDown
                      style={{
                        transform: menuOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "0.3s",
                      }}
                    />
                  </button>

                  {menuOpen && (
                    <div className={Style.phone_menu}>
                      <div className={Style.phone_menu_container}>
                        {/* <input
                          type="text"
                          placeholder="Search by country"
                          className={Style.searc_input}
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          onFocus={() => setMenuOpen(true)}
                        /> */}
                        {filteredCountries.length > 0 ? (
                          filteredCountries.map((item) => (
                            <div
                              key={item.code}
                              className={Style.phone_item}
                              onClick={() => {
                                setSelectedCodeState(item.code);
                                setMenuOpen(false);
                                setSearchTerm("");
                              }}>
                              {item.name} ({item.code})
                            </div>
                          ))
                        ) : (
                          <div className={Style.phone_item}>
                            No results found
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <input
                  type="number"
                  className={Style.phone_control}
                  placeholder="000"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
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

              {/* <div className={Style.dropdown} ref={quantityRef}>
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
              </div> */}
              <input
                type="text"
                className={Style.form_control}
                placeholder="1000 Tonnes"
              />
            </div>

            <button className={Style.btn_submit} type="button">
              <span>Submit</span>
            </button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ContactForm;
