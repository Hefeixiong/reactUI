import React from "react";
import Divider from "../../components/divider";
import "./index.scss";

function Notes() {
  const tableMap = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="note-content">
      <div className="title">
        <div className="id">序号</div>
        <div className="date">创建时间</div>
        <div className="name">标题</div>
        <div className="action">操作</div>
      </div>
      <Divider />
      <div className="table-content">
        {tableMap.map((item) => (
          <div key={item}>
            <div className="item-content">
              <div className="item-id">{item}</div>
              <div className="item-date">2022-11-12</div>
              <div className="item-context">标题 {+item}</div>
              <div className="item-action">
                <div>查看</div>
                <div>删除</div>
              </div>
            </div>
            <Divider />
          </div>
        ))}
      </div>
      <div className="footer"> 翻页</div>
    </div>
  );
}

export default Notes;
