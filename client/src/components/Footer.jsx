import React from "react";
import { text } from "../data/text";
import { body } from "../styles/styles";

const Footer = () => {
  return (
    <div className={body.footerSection}>
      <p className={body.footerTxt}>{text.footer}</p>
    </div>
  );
};

export default Footer;
