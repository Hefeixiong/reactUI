import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Index";
import Doc from "./doc/index";
import UserInfo from "./views/userIfno";
import Notes from "./views/notes";
import CodeView from "./views/modules";

function App() {
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
}

export default App;
