import React from "react";
import "./Menu.scss";
import Button from "../Button/Button";
import classNames from "classnames";
const menuItems = [
  { label: "Services", id: "Services" },
  { label: "Expertize", id: "Expertize" },
  { label: "Process", id: "Process" },
  { label: "Projects", id: "Projects" },
  { label: "Contact", id: "contacts-section" },
  { label: "Faq", id: "Faq" },
];

interface IMenu {
  open: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu = ({ open, setOpenMenu }: IMenu) => {
  const handleClick = (id: string) => {
    try {
      const targetElement = document.getElementById(id);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        setOpenMenu(false);
      }
    } catch (error) {
      console.error(`Error scrolling to ${id} section:`, error);
    }
  };
  const onContactUsClick = () => {
    const contactSection = document.getElementById("contacts-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      setOpenMenu(false);
    }
  };
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      className={classNames("menu", { "menu-open": open })}
    >
      <div className="menu-items">
        {menuItems.map((item) => (
          <button aria-label={`Go to ${item.label} section`} onClick={() => handleClick(item.id)} key={item.id} className="menu-item">
            {item.label}
          </button>
        ))}
      </div>
      <div className="menu-button-contact-us">
        <Button onClick={onContactUsClick} aria-label="Contact us">
          Contact us
        </Button>
      </div>
    </div>
  );
};

export default Menu;
