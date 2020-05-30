import React from "react";
import "./style.scss";

interface HeaderProps {
  title: string;
}

export default ({ title }: HeaderProps) => (
  <header>
    <div className="container">
      <div className="row">
        <h1>{title}</h1>
      </div>
    </div>
  </header>
);
