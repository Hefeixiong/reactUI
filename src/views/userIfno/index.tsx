import React from "react";
import "./index.scss";
import Intor from "./intor/Intor";

function UserInfo() {
  return (
    <div className="userinfo-wrapper">
      <h1>欢迎您，晚上好</h1>
      <Intor />
    </div>
  );
}

export default UserInfo;
