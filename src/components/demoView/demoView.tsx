import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { rainbow } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Button from "../button/Button";
import Divder from "../divider/index";
import "./index.scss";

function DemoView(props: any) {
  const [isShow, setisShow] = useState(Boolean);
  const onShow = () => {
    setisShow(!isShow);
  };
  return (
    <div className="view-wrapper" style={{ marginBottom: "24px" }}>
      <h1>{props.intor}</h1>
      <Divder />
      <div className="demo">{props.children}</div>
      <Divder />
      <div className="demoShow">
        {!isShow ? (
          <Button title="显示代码" type="dafault" onClick={onShow} />
        ) : (
          <Button title="隐藏代码" type="dafault" onClick={onShow} />
        )}
      </div>
      <div className={"demoView " + isShow}>
        <SyntaxHighlighter language="javascript" style={rainbow}>
          {props.demo}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default DemoView;
