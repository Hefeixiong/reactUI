import React from "react";
import Button from "../../components/button/Button";
import DemoView from "../../components/demoView/demoView";

import colorDemo from "./static/color";

const ButtonDemo = () => {
  return (
    <div className="demo-wrapper">
      <DemoView intor="支持不同颜色" demo={colorDemo}>
        <Button title="button" type="dafault" />
        <Button title="button" type="warn" />
        <Button title="button" type="primary" />
      </DemoView>

      <DemoView intor="支持不同颜色" demo={colorDemo}>
        <Button title="button" type="dafault" />
        <Button title="button" type="warn" />
        <Button title="button" type="primary" />
      </DemoView>
    </div>
  );
};

export default ButtonDemo;
