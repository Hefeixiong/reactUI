import React from "react";
import "./intor.scss";

function Intor() {
  return (
    <div className="userinfo-wrapper">
      <div className="user-intor">
        <div className="user-content">
          <div className="left">
            <div className="avatar">
              <img
                src="https://tingyun.peoplus.cn/web_img/static/image/male4.png"
                alt=""
              />
            </div>
            <div className="info">
              <p>hefx</p>
              <p>前端开发工程师</p>
            </div>
          </div>
          <div className="right">您已经创建1天了</div>
        </div>
      </div>
    </div>
  );
}

export default Intor;
