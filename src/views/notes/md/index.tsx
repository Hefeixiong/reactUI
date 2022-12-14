import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Index() {
  const [markdown, setMarkdown] = useState(``);

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      setMarkdown(xmlhttp.responseText);
    }
  };
  // 文件目录在 public/md/test.md 这里不需要写 public 因为打包之后没有此目录。
  xmlhttp.open("GET", "/md/test.md", true);
  xmlhttp.send();

  return (
    <div>
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
}
export default Index;
