import React from "react";
import "./styles/main.scss";

const Main = () => {
  return (
    <div className="Wrapper-main">
      <div className="text">
        <h1>Everything you need to grow your business</h1>
        <p>
          Protonn does everything you need to start and grow your buisness,
          Attract clients through engaging video
        </p>
      </div>
      <div className="button">Get Start</div>
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
