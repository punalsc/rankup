import React from "react";
import "./style.scss";

type LoadingProps = {
  msg: string;
};

export default ({ msg }: LoadingProps) => <p className="loading">{msg}</p>;
