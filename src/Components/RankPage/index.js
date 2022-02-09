import React, { useState, useEffect } from "react";
import axios from "axios";
import NotFoundPage from "../NotFoundPage";
import "./style.css";

const RankPage = () => {
  return (
    <main className="MainSection">
      <div className="Select">좋아요를 많이 받은 구인공고</div>
      <div className="Select">최근에 올라온 구인공고</div>
    </main>
  );
};

export default RankPage;
