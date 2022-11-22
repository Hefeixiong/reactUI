import React, { FC } from "react";
import "./button.scss";

type butonProps = {
  title: string;
  type: string;
  onClick?: () => void;
};

const Button: FC<butonProps> = (props: butonProps) => {
  return (
    <button className={"button " + props.type} onClick={props.onClick}>
      <span>{props.title}</span>
    </button>
  );
};

export default Button;
