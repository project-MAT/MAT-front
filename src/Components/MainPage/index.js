import React, { useState } from "react";
import "./style.css";
import MainItem from "../Common/WriteBox";

const MainPage = () => {
  const [value, setValue] = useState([
    { title: "MAT 디자이너 구합니다", tag: "#디자이너 #MAT" },
    { title: "MAT 디자이너 구합니다", tag: "#디자이너 #MAT" },
    { title: "MAT 디자이너 구합니다", tag: "#디자이너 #MAT" },
    { title: "MAT 디자이너 구합니다", tag: "#디자이너 #MAT" },
    { title: "MAT 디자이너 구합니다", tag: "#디자이너 #MAT" },
    { title: "MAT 디자이너 구합니다", tag: "#디자이너 #MAT" },
    { title: "MAT 디자이너 구합니다", tag: "#디자이너 #MAT" },
    { title: "MAT 디자이너 구합니다", tag: "#디자이너 #MAT" },
    { title: "MAT 디자이너 구합니다", tag: "#디자이너 #MAT" },
    { title: "MAT 디자이너 구합니다", tag: "#디자이너 #MAT" },
  ]);

  return (
    <main className="MainSection">
      {value.map((item, i) => (
        <MainItem item={item} key={i} index={i} isMine={false}></MainItem>
      ))}
    </main>
  );
};

export default MainPage;
