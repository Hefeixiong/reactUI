import React from "react";
import "./styles/navbar.scss";

const Navbar = () => {
  return (
    <ol className="navbar">
      <li className="logo-name">
        <svg className="icon" aria-hidden="true">
          <use xlinkHref="#icon-main"></use>
        </svg>
        <div className="name">ReactUI</div>
      </li>

      <li className="middle">我的官网</li>

      <li className="user-info">
        <div className="avatar">xxx</div>
        <div>username</div>
      </li>
    </ol>
  );
};

export default Navbar;
