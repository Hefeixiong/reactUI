import React from "react";
import Button from "../../components/button/Button";
import DemoView from "../../components/demoView/demoView";

const ButtonDemo = () => {
  const demo = `import React from "react";
import Button from "../../components/button/Button";

export defalut const App: React.FC = () => {
return (
  <div>
    <Button title="button" type="dafault" />
    <Button title="button" type="warn" />
    <Button title="button" type="primary" />
  </div>
)};`;

  return (
    <DemoView title="Buton组件实例" intor="支持不同颜色" demo={demo}>
      <Button title="button" type="dafault" />
      <Button title="button" type="warn" />
      <Button title="button" type="primary" />
    </DemoView>
  );
};

export default ButtonDemo;
