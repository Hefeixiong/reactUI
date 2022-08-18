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
      <li className="middle">Product</li>
      <li className="right">Pricing</li>
    </ol>
  );
};

export default Navbar;
