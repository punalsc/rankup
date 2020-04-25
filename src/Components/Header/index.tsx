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

  /* <div
        className="row"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="one-full column">
          <header id="rand-images">
            <strong>{children}</strong>
          </header>
        </div>
      </div> */
);
