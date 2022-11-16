import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { rainbow } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Button from "../../components/button/Button";

function CodeView() {
  return (
    <div className="view-wrapper">
      <div>
        <Button text={"xxx"} type="warn" />
        <Button text={"xxx"} type="default" />
        <Button text={"xxx"} type="primary" />
      </div>
      <button>隐藏/显示</button>
      <div>
        <SyntaxHighlighter language="javascript" style={rainbow}>
          {`<Button text={"xxx"} type="warn" />`}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default CodeView;
