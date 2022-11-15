import React, { useState } from "react";
import { Link } from "react-router-dom";
import Divider from "../divider";
import "./navbar.scss";

function Navbar() {
  const [menuVisible, setmeunVisible] = useState(Boolean);
  const OpneMenu = () => {
    setmeunVisible(!menuVisible);
  };
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <Link className="i" to={"/"}>
          <li className="logo-name">
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-chengxuyuan-icon"></use>
            </svg>
          </li>
        </Link>
        <li className="middle">我的官网</li>

        <li className="user-info">
          <div className="avatar">xxx</div>
          <div className="username" onClick={OpneMenu}>
            <span>hefx</span>
            <svg className="icon-dowm" aria-hidden="true">
              <use xlinkHref="#icon-down"></use>
            </svg>
          </div>
          {menuVisible ? (
            <ol className="menu-wrapper ">
              <div className="items">
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-user-fill"></use>
                </svg>
                <span>用户中心</span>
              </div>
              <Divider />
              <div className="items">
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-yuyan"></use>
                </svg>
                <span> 切换语言</span>
              </div>
              <Divider />
              <div className="items">
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-tuichuzhuxiao"></use>
                </svg>
                <span> 注销 </span>
              </div>
            </ol>
          ) : null}
        </li>
      </div>
    </div>
  );
}

export default Navbar;
