import { Link } from 'react-router-dom'
import '../../../App.css'
import Post from '../../../Post'
import React, { useState } from 'react'

function Aside() {
  const [isLShowing, setPostShowing] = useState(false)
  const openPost = () => {
    setPostShowing(true)
  }
  return (
    <div>
      <div className="lines">
        <div className="line l1" />
        <div className="line l2" />
        <div className="line l3" />
      </div>
      <aside>
        <nav>
          <ul>
            <Link to="/">
              <li>구인공고</li>
            </Link>
            <Link to="/Question">
              <li>HOT RANK</li>
            </Link>
            <Link to="/About">
              <li>알아보기</li>
            </Link>
            <Link to="/">
              <li>
                <img
                  img
                  className="icon_mypage"
                  alt="마이페이지"
                  src="icon_mypage.png"
                />
              </li>
            </Link>
          </ul>
          <div className="box">
            <div className="quartercircle" onClick={openPost}>
              <img
                className="icon_write"
                alt="공고문 작성"
                src="icon_write.png"
              />
            </div>
          </div>
        </nav>
      </aside>
      <div>{isLShowing && <Post />}</div>
    </div>
  )
}

export default Aside
