import React from "react";
import "./index.scss";

function Notes() {
  const tableMap = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="note-content">
      <div className="title"> 标题 </div>
      <div className="table-content">
        {tableMap.map((item) => (
          <li key={item}>
            <div>序号</div>
            <div>内容</div>
            <div>操作</div>
          </li>
        ))}
      </div>
      <div className="footer"> 翻页</div>
    </div>
  );
}

export default Notes;
