import React from "react";
import "./Loader.scss";

interface ILoaderProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
  size?: string; // Size can be a string like '24px', '2rem', etc.
}

const Loader = ({ className, size }: ILoaderProps) => {
  return <span className={`loader ${className}`} style={size ? { width: size, height: size } : {}}></span>;
};

export default Loader;
