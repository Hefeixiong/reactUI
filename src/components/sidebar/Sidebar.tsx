import React from "react";
import { Link } from "react-router-dom";
import Divider from "../divider";
import "./sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebar-warpper">
      <div className="items-wrapper">
        <div className="item-groups">
          <Link className="first-item" to="/doc/userinfo">
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-gailan"></use>
            </svg>
            <span>个人中心</span>
          </Link>
        </div>

        <Divider />

        <div className="item-groups">
          <Link className="first-item" to="/doc/buttonDemo">
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-zujian"></use>
            </svg>
            <span>组件</span>
          </Link>
        </div>

        <Divider />

        <div className="item-groups">
          <Link className="first-item" to={"/doc/notes"}>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-wenjianjia"></use>
            </svg>
            <span>文档</span>
          </Link>
        </div>

        <Divider />

        <div className="item-groups">
          <div className="first-item">
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-shezhi"></use>
            </svg>
            <span>设置</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
