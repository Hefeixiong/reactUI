import React from "react";
import "./styles/navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
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
          <div className="username">
            <span>hefx</span>
            <svg className="icon-dowm" aria-hidden="true">
              <use xlinkHref="#icon-down"></use>
            </svg>
          </div>
          <ol className="menu-wrapper">
            <div className="items">
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-user-fill"></use>
              </svg>
              <span>用户中心</span>
            </div>
            <div className="divider"></div>
            <div className="items">
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-yuyan"></use>
              </svg>
              <span> 切换语言 </span>
            </div>
            <div className="divider"></div>
            <div className="items">
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-tuichuzhuxiao"></use>
              </svg>
              <span> 注销 </span>
            </div>
          </ol>
        </li>
      </ol>
    </div>
  );
};

export default Navbar;
