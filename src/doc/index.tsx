import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";

import "./index.scss";

function doc() {
  return (
    <div className="content-wrapper">
      <Navbar />
      <div className="main-wrapper">
        <Sidebar />
        <div className="main-solt">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default doc;
