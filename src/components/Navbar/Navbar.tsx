import React, { useCallback, useEffect, useState } from "react";
import "./Navbar.scss";
import classNames from "classnames";
import Menu from "../Menu/Menu";
import MenuButton from "../Menu/MenuButton";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 10) setScrolled(true);
    else setScrolled(false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    const closeMenu = () => {
      setOpenMenu(false);
    };
    if (openMenu) window.addEventListener("click", closeMenu);

    return () => {
      window.removeEventListener("click", closeMenu);
    };
  }, [openMenu]);

  return (
    <nav className={classNames("navbar", { "navbar-scrolled": scrolled })}>
      <div className="center-container navbar-content">
        <h1>Delphi Labs</h1>
        <div className="menu-container">
          <MenuButton openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <Menu open={openMenu} setOpenMenu={setOpenMenu} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
