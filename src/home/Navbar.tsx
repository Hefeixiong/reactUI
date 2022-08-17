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
      <li className="pro">Product</li>
      <li className="pri">Pricing</li>
      <li className="res">Resources</li>
    </ol>
  );
};

export default Navbar;
