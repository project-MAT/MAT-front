import React, { useState } from "react";
import "./style.css";
import MainItem from "../Common/WriteBox";

const MyPage = () => {
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
    <main className="MyPage">
      <p>
        <img src="dot.png" /> 내가 쓴 공고문
      </p>
      <div className="myitem">
        {value.map((item, i) => (
          <MainItem item={item} key={i} index={i} isMine={true}></MainItem>
        ))}
      </div>
      <p>
        <img src="dot.png" /> 전공 수정하기
      </p>
      <div>
        <select id="major" className="major">
          <option value="1">게임개발</option>
          <option value="2">네트워크</option>
          <option value="3">백엔드</option>
          <option value="4">안드로이드</option>
          <option value="5">인공지능</option>
          <option value="6">프론트엔드</option>
          <option value="7">하드웨어</option>
          <option value="8">iOS</option>
          <option value="9">IOT</option>
          <option value="10">infra</option>
          <option value="11">UI & UX</option>
        </select>
      </div>
      <p>
        <img src="dot.png" /> 디스코드 수정하기
      </p>
      <div>
        <input className="discordNum" placeholder="ex) #0000 (#필수!!)"></input>
      </div>
    </main>
  );
};

export default MyPage;
