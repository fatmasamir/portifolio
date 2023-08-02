import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.scss";
const Navbar = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  document.body.className = "";
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.body.dir = i18n.dir();
  };
  let light = true;
  const changelight = () => {
    light
      ? (document.body.className = "ligth")
      : (document.body.className = "");
    light = !light;
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <Container>
        <NavLink className="navbar-brand" to="/">
          <h3> {t("Fatma")}</h3>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item " onClick={() => changelight()}>
              <NavLink className="nav-link " to="/">
                <FontAwesomeIcon icon={faMoon} />
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link " to="#main">
                {t("Services")}
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link " to="#about">
                {t("Projects")}
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link " to="#services_wrapper">
                {t("Contactus")}
              </NavLink>
            </li>
            <li className="mobileLang">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  {i18n.language === "en" ? "En" : t("ar")}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => changeLanguage("en")}>
                    {t("en")}
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => changeLanguage("ar")}>
                    {t("ar")}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
        <Dropdown className="screenLang">
          <Dropdown.Toggle id="dropdown-basic">
            {i18n.language === "en" ? "En" : t("ar")}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => changeLanguage("en")}>
              {t("en")}
            </Dropdown.Item>
            <Dropdown.Item onClick={() => changeLanguage("ar")}>
              {t("ar")}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </nav>
  );
};

export default Navbar;
