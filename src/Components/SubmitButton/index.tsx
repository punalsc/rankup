import React from "react";
import "./style.scss";

interface SubmitButtonProps {
  placeholder: string;
  className: string;
  value: string;
  disabled: boolean;
}

export default ({ className, value, disabled }: SubmitButtonProps) => (
  <div className="three columns">
    <button id="submitButton" className={className} type="submit" {...disabled}>
      {value}
    </button>
  </div>
);
