import React from "react";
import { Link } from "react-router-dom";
import Divider from "../divider";
import "./sidebar.scss";

function Sidebar() {
  const xxx = [
    {
      id: 0,
      title: "个人中心",
      icon: "#icon-gailan",
      url: "/doc/userinfo",
      children: {},
    },
    {
      id: 1,
      title: "组件",
      icon: "#icon-zujian",
      url: "/doc/buttonDemo",
      children: {},
    },
    {
      id: 2,
      title: "文档",
      icon: "#icon-wenjianjia",
      url: "/doc/notes",
      children: {},
    },
    {
      id: 3,
      title: "设置",
      icon: "#icon-shezhi",
      url: "/doc/buttonDemo",
      children: {},
    },
  ];
  return (
    <div className="items-wrapper">
      {xxx.map((item) => {
        return (
          <div className="item-groups" key={item.id}>
            <Link className="first-item" to={item.url}>
              <svg className="icon" aria-hidden="true">
                <use xlinkHref={item.icon}></use>
              </svg>
              <span>{item.title}</span>
            </Link>
            <Divider />
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
