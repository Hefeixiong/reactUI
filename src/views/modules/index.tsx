import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { rainbow } from "react-syntax-highlighter/dist/esm/styles/hljs";

function CodeView() {
  const codeString = `function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="doc" element={<Doc />}>
            <Route path="userinfo" element={<UserInfo />} />
            <Route path="notes" element={<Notes />} />
            <Route path="codeview" element={<CodeView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }`;
  return (
    <SyntaxHighlighter language="javascript" style={rainbow}>
      {codeString}
    </SyntaxHighlighter>
  );
}

export default CodeView;
