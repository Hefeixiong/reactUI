import React from "react";
import "./sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebar-warpper">
      <div className="items-wrapper">
        <div className="item">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-gailan"></use>
          </svg>
          <span>概览</span>
        </div>

        <div className="divider"></div>

        <div className="item">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-zujian"></use>
          </svg>
          <span>组件</span>
        </div>

        <div className="divider"></div>

        <div className="item">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-wenjianjia"></use>
          </svg>
          <span>文档</span>
        </div>

        <div className="divider"></div>

        <div className="item">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-shezhi"></use>
          </svg>
          <span>设置</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
