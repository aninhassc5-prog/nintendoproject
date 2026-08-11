import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        &copy; {new Date().getFullYear()} Nintendo Blog Project - Tripleten 2026
      </p>
    </footer>
  );
}

export default Footer;
