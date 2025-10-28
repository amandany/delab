import React from "react";
import IconButton from "../../components/IconButton/IconButton";
import { TELEGRAM_LINK } from "../../constants";
import "./Footer.scss";

const Footer = () => {
  const onClickTg = () => {
    window.open(TELEGRAM_LINK);
  };
  return (
    <footer className="footer">
      <p className="footer-text">Copyright © Delphi Labs - blockchain development labs</p>
      <div className="footer-socials">
        <IconButton link={TELEGRAM_LINK} iconName="telegram" />
      </div>
    </footer>
  );
};

export default Footer;
