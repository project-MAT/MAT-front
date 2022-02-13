import React, { useState, useEffect } from "react";
import axios from "axios";
import NotFoundPage from "../NotFoundPage";
import "./style.css";
import MainItem from "../Common/WriteBkx";

const RankPage = () => {
  const [liked, setLiked] = useState([
    { title: "좋아요", tag: "#디자이너 #MAT" },
    { title: "좋아요", tag: "#디자이너 #MAT" },
    { title: "좋아요", tag: "#디자이너 #MAT" },
    { title: "좋아요", tag: "#디자이너 #MAT" },
    { title: "좋아요", tag: "#디자이너 #MAT" },
    { title: "좋아요", tag: "#디자이너 #MAT" },
    // { title: "좋아요", tag: "#디자이너 #MAT" },
  ]);
  const [recent, setRecent] = useState([
    { title: "최근", tag: "#디자이너 #MAT" },
    { title: "최근", tag: "#디자이너 #MAT" },
    // { title: "최근", tag: "#디자이너 #MAT" },
    // { title: "최근", tag: "#디자이너 #MAT" },
  ]);

  const [likeOpacity, setLikeOpacity] = useState(1);
  const [recentOpacity, setRecentOpacity] = useState(0.4);

  return (
    <main className="MainSection">
      <div className="SelectSection">
        <div>
          <div
            className="circle"
            style={{
              opacity: likeOpacity === 1 ? 1 : 0,
            }}
          ></div>
          <span
            className="select"
            onClick={() => {
              setLikeOpacity(1);
              setRecentOpacity(0.4);
            }}
            style={{
              opacity: `${likeOpacity}`,
            }}
          >
            좋아요를 많이 받은 구인공고
          </span>
        </div>
        <div>
          <div
            className="circle"
            style={{ opacity: recentOpacity === 1 ? 1 : 0 }}
          ></div>
          <span
            className="select"
            onClick={() => {
              setLikeOpacity(0.4);
              setRecentOpacity(1);
            }}
            style={{ opacity: `${recentOpacity}` }}
          >
            최근에 올라온 구인공고
          </span>
        </div>
      </div>
      <div className="RankSection">
        <div
          className="rank"
          style={{
            opacity: `${likeOpacity}`,
            pointerEvents: likeOpacity === 1 ? "auto" : "none",
          }}
        >
          {liked.map((liked, i) => (
            <MainItem item={liked} key={i} index={i} />
          ))}
        </div>
        <div
          className="rank"
          style={{
            opacity: `${recentOpacity}`,
            pointerEvents: recentOpacity === 1 ? "auto" : "none",
          }}
        >
          {recent.map((recent, i) => (
            <MainItem item={recent} key={i} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default RankPage;
