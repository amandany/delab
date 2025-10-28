import React from "react";
import "./IconButton.scss";
import Icons from "./Icons";
type Props = {
  iconName: "discord" | "X" | "telegram";
  link: string;
  onClick?: VoidFunction;
};

const IconButton = ({ iconName, link, onClick }: Props) => {
  return (
    <a aria-label={`Open ${iconName} link`} href={link} target="_blank" rel="noopener noreferrer">
      <button aria-label={`Open ${iconName} link`} onClick={onClick} className="icon-button">
        <Icons iconName={iconName} />
      </button>
    </a>
  );
};

export default IconButton;
