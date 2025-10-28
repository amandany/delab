import React, { useId } from "react";
import "./Input.scss";

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  placeholder: string;
  maxLength?: number;
}

const Input = ({ value, onChange, placeholder, maxLength, ...props }: InputProps) => {
  const id = useId();
  return (
    <div className="input-field">
      <input
        type="text"
        className="input-field__input"
        value={value}
        onChange={(e) => {
          if (maxLength && e.target.value.length < maxLength + 1) onChange?.(e);
        }}
        placeholder={placeholder}
        id={id}
        autoComplete="off"
        {...props}
      />
      <label htmlFor={id} className="input-field__label">
        {placeholder}
      </label>
      {maxLength && value && value.toString()?.length > ((maxLength || 0) - 1) * 0.9 && (
        <p className="input-field__max-length">{`${value.toString()?.length || 0}/${maxLength}`}</p>
      )}
    </div>
  );
};

export default Input;
