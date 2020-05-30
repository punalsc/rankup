import React from "react";
import "./style.scss";

interface InputProps {
  placeholder?: string;
  value: string;
  onChange: () => any;
}

export default ({ value, onChange, placeholder }: InputProps) => {
  return (
    <div className="nine columns">
      <div className="input-group">
        <input
          id="mainInput"
          className="u-full-width input-group__input"
          placeholder={placeholder}
          type="text"
          value={value}
          onChange={onChange}
        />

        <label className="input-group__label" htmlFor="mainInput">
          Search any character
        </label>
      </div>
    </div>
  );
};
