import React, { useEffect, useState } from "react";
import "./style.css";
import * as I from "../../../Assets/SVG";

const MainItem = (props) => {
  const item = props.item;
  const index = props.index;
  const isMine = props.isMine;
  const [like, setLike] = useState(false);
  const [background, setBackground] = useState();

  useEffect(() => {
    const color = ["#FFDE9E", "#FFC38C", " #FFDE9E", "#FFDCDC"];
    const randomColor = color[Math.floor(Math.random() * 4)];
    setBackground(randomColor);
  }, []);

  const TryLike = () => {
    setLike(!like);
  };

  return (
    <div className="wrapper">
      <div className="ItemSection" style={{ backgroundColor: background }}>
        <div className="TitleSection">
          <div className="title">{item.title}</div>
        </div>
        <span className="TagSection">
          <span className="tag">{item.tag}</span>
          {isMine ? (
            <span className="WorkSection">
              <img src="fix.png" className="fix" />
              <img src="del.png" className="del" />
            </span>
          ) : (
            <div className="like" onClick={() => TryLike()}>
              {like ? <I.RedLike /> : <I.BlackLike />}
            </div>
          )}
        </span>
      </div>
    </div>
  );
};

export default MainItem;
