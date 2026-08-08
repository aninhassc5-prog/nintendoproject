import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Nintendo Blog Project</p>
    </footer>
  );
}

export default Footer;
