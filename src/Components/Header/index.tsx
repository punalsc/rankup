import React, { ReactNode } from "react";
import "./style.scss";

interface HeaderProps {
  title: string;
  paragraph: string;
  children: ReactNode;
  backgroundImage: string;
}

export default ({
  title,
  paragraph,
  children,
  backgroundImage,
}: HeaderProps) => (
  <section id="header-section">
    <div className="container">
      <div className="row">
        <div className="six columns">
          <h1>{title}</h1>
        </div>
        <div className="six columns">
          <p className="borderBottom">{paragraph}</p>
        </div>
      </div>
      <div
        className="row"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="one-full column">
          <header id="rand-images">
            <strong>{children}</strong>
          </header>
        </div>
      </div>
    </div>
  </section>
);
