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
}: HeaderProps) => {
  return (
    <section style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container">
        <div className="row">
          <div className="one-full column">
            <header id="rand-images">
              <h1>{title}</h1>
              <p>{paragraph}</p>
              {children}
            </header>
          </div>
        </div>
      </div>
    </section>
  );
};
