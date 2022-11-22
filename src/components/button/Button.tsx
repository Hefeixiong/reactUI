import React, { FC } from "react";
import "./button.scss";

type butonProps = {
  title: string;
  type: string;
  loading?: boolean;
  onClick?: () => void;
};

const Button: FC<butonProps> = (props: butonProps) => {
  return (
    <button className={"button " + props.type} onClick={props.onClick}>
      {props.loading ? <span className="button-loadingIndicator"></span> : null}
      <span>{props.title}</span>
    </button>
  );
};

export default Button;
