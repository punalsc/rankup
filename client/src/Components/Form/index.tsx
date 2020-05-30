import React, { ReactNode } from "react";
import "./style.scss";

type FormProps = {
  children: ReactNode;
  onSubmit: () => any;
};

export default ({ children, onSubmit }: FormProps) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="row">{children}</div>
    </form>
  );
};
