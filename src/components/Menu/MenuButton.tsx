import React from "react";
import "./MenuButton.scss";

type MenuButtonProps = { openMenu: boolean; setOpenMenu: React.Dispatch<React.SetStateAction<boolean>> };

const MenuButton = ({ openMenu, setOpenMenu }: MenuButtonProps) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setOpenMenu((prev) => !prev);
      }}
      className={`animated-menu-button ${openMenu ? "open" : ""}`}
      aria-expanded={openMenu}
      aria-label="Toggle menu"
    >
      <span className="menu-text">MENU</span>

      <svg className="menu-cross" viewBox="0 0 100 100">
        <path d="M 20 20 L 80 80" />
        <path d="M 80 20 L 20 80" />
      </svg>
    </button>
  );
};

export default MenuButton;
