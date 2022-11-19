import React from "react";
import Button from "../../components/button/Button";
import DemoView from "../../components/demoView/demoView";

const ButtonDemo = () => {
  return (
    <DemoView title="Buton组件实例">
      <Button text={"xxxx"} type={"dafault"} />
      <Button text={"xxxx"} type={"warn"} />
    </DemoView>
  );
};

export default ButtonDemo;
