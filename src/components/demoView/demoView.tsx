import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { rainbow } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Divder from "../divider/index";
import "./index.scss";

function DemoView(props: any) {
  const [isShow, setisShow] = useState(Boolean);
  const onShow = () => {
    setisShow(!isShow);
  };
  console.log(props);
  return (
    <div className="view-wrapper">
      <h1>{props.title}</h1>
      <div className="demo">{props.children}</div>
      <Divder />
      <div className="demoShow">
        {!isShow ? (
          <button onClick={onShow}>显示代码</button>
        ) : (
          <button onClick={onShow}>隐藏代码</button>
        )}
      </div>
      <div className={"demoView " + isShow}>
        <SyntaxHighlighter language="javascript" style={rainbow}>
          {`<Button text={"xxx"} type="warn" />`}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default DemoView;
