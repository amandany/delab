import classNames from "classnames";
import React from "react";
import "./Button.scss";
import Loader from "../Loader/Loader";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variants?: "primary" | "secondary" | "danger" | "contact";
  className?: string;
  isLoading?: boolean;
}

const Button = ({ children, className, onClick, disabled, variants = "primary", isLoading, ...props }: IButton) => {
  return (
    <button
      aria-label="Button"
      className={classNames(`button`, `button--${variants}`, className, { "button--loading": isLoading })}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {isLoading && (
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
          <Loader size="40px" />
        </div>
      )}
      {variants === "contact" ? (
        <>
          {children}
          <span className="contact-arrow">↓</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
