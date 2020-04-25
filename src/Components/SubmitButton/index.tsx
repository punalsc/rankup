import React from "react";
import "./style.scss";

interface SubmitButtonProps {
  placeholder: string;
  className: string;
  value: string;
  onClick: () => any;
}

export default ({ className, value, onClick }: SubmitButtonProps) => (
  <>
    <button
      id="submitButton"
      className={className}
      onClick={onClick}
      type="submit"
    >
      {value}
    </button>
  </>
);
