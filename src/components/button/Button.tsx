import React, { FC } from "react";
import "./button.scss";

type buttonProp = {
  text: string;
  type: string;
  onClick?: (value: string) => void;
};

const Button: FC<buttonProp> = (props) => {
  return (
    <button className={"button " + props.type}>
      <span>{props.text}</span>
    </button>
  );
};

export default Button;
