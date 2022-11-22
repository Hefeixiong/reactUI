import React from "react";
import Button from "../../components/button/Button";
import DemoView from "../../components/demoView/demoView";

import { colorDemo, loadingDemo } from "./static/index";

const ButtonDemo = () => {
  return (
    <div className="demo-wrapper">
      <DemoView intor="支持不同类型" demo={colorDemo}>
        <Button title="button" type="dafault" />
        <Button title="button" type="warn" />
        <Button title="button" type="primary" />
      </DemoView>

      <DemoView intor="支持显示加载中" demo={loadingDemo}>
        <Button title="button" type="dafault" loading />
        <Button title="button" type="dafault" />
      </DemoView>
    </div>
  );
};

export default ButtonDemo;
