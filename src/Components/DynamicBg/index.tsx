import React, { ReactNode } from "react";
import "./style.scss";

interface DynamicBgProps {
  children: ReactNode;
  background: string;
}

export default ({ children, background }: DynamicBgProps) => (
  <section id="dynamicBg" style={{ backgroundImage: `url(${background})` }}>
    <div>{children}</div>
  </section>
);
