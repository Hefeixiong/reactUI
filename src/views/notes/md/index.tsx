import React from "react";
import fs from "fs";
import path from "path";

function Index() {
  const url = "./";
  const readFile = () => {
    fs.readdir("./", (err, file) => {
      if (err) throw err;
      file.forEach((file) => {
        let fPath = path.join("./", file);
        fs.stat(fPath, (err, stat) => {
          if (stat.isFile()) {
            console.log(file);
          }
        });
      });
    });
    console.log("hi");
  };
  return <div onClick={readFile}>sss</div>;
}
export default Index;
