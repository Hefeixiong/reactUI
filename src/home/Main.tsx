import React from "react";
import { Link } from "react-router-dom";
import "./styles/main.scss";

const Main = () => {
  return (
    <div className="Wrapper-main">
      <div className="text">
        <h1>Everything you need to grow your business</h1>
        <p>使用react造一个轮子，全程手写，不使用第三方库。</p>
      </div>
      <Link to={"/doc"}>
        <div className="button">Get Start</div>
      </Link>
      <div className="wrapper-icon">
        <svg aria-hidden="true">
          <use xlinkHref="#icon-React"></use>
        </svg>
        <svg aria-hidden="true">
          <use xlinkHref="#icon-ts"></use>
        </svg>
        <svg aria-hidden="true">
          <use xlinkHref="#icon-light"></use>
        </svg>
      </div>
    </div>
  );
};

export default Main;
