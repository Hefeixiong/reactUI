import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Index";
import Doc from "./doc/index";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="doc" element={<Doc />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
