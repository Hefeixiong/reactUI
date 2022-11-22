import React, { FC } from "react";
import "./button.scss";

type butonProps = {
  title: string;
  type: string;
};

const Button: FC<butonProps> = (props: butonProps) => {
  return (
    <button className={"button " + props.type}>
      <span>{props.title}</span>
    </button>
  );
};

export default Button;
