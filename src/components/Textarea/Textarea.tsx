import classNames from "classnames";
import React from "react";
import './Textarea.scss'
interface ITextarea extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const Textarea = ({ className, ...props }: ITextarea) => {
  return <textarea className={classNames("textarea", className)} {...props} />;
};

export default Textarea;
