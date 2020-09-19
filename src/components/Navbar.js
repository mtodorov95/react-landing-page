import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import PublicIcon from "@material-ui/icons/Public";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Button from "./Button";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [button, setButton] = useState(true);

  useEffect(() => {
    showButton();
  }, []);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const closeMobileMenu = () => {
    setClicked(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to="/" className="navbar__logo" onClick={closeMobileMenu}>
            Traveler
            <PublicIcon className="navbar__logoIcon" />
          </Link>
          <div onClick={handleClick} className="navbar__menuIcon">
            {!clicked ? (
              <MenuIcon className="navbar__iconMenu" />
            ) : (
              <CloseIcon className="navbar__iconClose" />
            )}
          </div>
          <ul
            className={
              !clicked ? "navbar__menu" : "navbar__menu navbar__menuActive"
            }
          >
            <li className="navbar__menuItem">
              <Link to="/" className="navbar__link" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="navbar__menuItem">
              <Link
                to="/services"
                className="navbar__link"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="navbar__menuItem">
              <Link
                to="/products"
                className="navbar__link"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="navbar__menuItem">
              <Link
                to="/signup"
                className="navbar__linkMobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && (
            <Button children="Sign Up" buttonStyle="button__outline" />
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
