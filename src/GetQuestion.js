import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Page404 from './Page404';

function GetQuestion() {
  const [currentClick, setCurrentClick] = React.useState(null);
  const [prevClick, setPrevClick] = React.useState(null);

  const GetClick = (e) => {
    setCurrentClick(e.target.id);
    console.log(e.target.id);
  };

  React.useEffect(
    (e) => {
      if (currentClick !== null) {
        let current = document.getElementById(currentClick);
        console.log(current);
        current.style.color = "black";
      }

      if (prevClick !== null) {
        let prev = document.getElementById(prevClick);
        prev.style.color = "#bebcbc";
      }
      setPrevClick(currentClick);
    },
    [currentClick]
  );

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setError(null);
        setData(null);
        setLoading(true);
        const response = await axios.get('/v1/question/rank/like');
        setData(response.data.list); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return (
    <main>
      <div className="loadingtext">로딩중..</div>
    </main>
  )
  if (error) return <Page404 />;
  if (!data) return null;
  return (
    <main>
      <button id="case1" onClick={GetClick}>좋아요를 많이받은 구인공고</button>
      <button id="case2" onClick={GetClick}>최근에 올라온 구인공고</button>
      <div className="testgrid">
        {data.map(data => (
          <div key={data.question_id} className="testitem">
            <div className="testtitle">{data.title}</div>
            <p className="testtag">#테스트 테그</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default GetQuestion;

