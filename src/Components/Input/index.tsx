import React from "react";
import "./style.scss";

interface InputProps {
  placeholder?: string;
  value: string;
  onChange: () => any;
}

export default ({ value, onChange, placeholder }: InputProps) => {
  return (
    <>
      <div className="two columns">
        <label htmlFor="exampleEmailInput">Search Superhero</label>
      </div>
      <div className="ten columns full-width">
        <input
          className="u-full-width"
          placeholder={placeholder}
          type="text"
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};
