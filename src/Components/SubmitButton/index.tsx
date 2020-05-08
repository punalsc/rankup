import React from "react";
import "./style.scss";

interface SubmitButtonProps {
  placeholder: string;
  className: string;
  value: string;
  disabled: boolean;
}

export default ({ className, value, disabled }: SubmitButtonProps) => (
  <>
    <button id="submitButton" className={className} type="submit" {...disabled}>
      {value}
    </button>
  </>
);
