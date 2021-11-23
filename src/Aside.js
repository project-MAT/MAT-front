import './App.css';

function Aside() {
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
                        <li>구인공고</li>
                        <li>HOT RANK</li>
                        <li>알아보기</li>
                        <li><img img className="icon_mypage" alt="마이페이지" src="icon_mypage.png" /></li>
                    </ul>
                    <div className="box">
                        <div className="quartercircle" >
                            <img className="icon_write" alt="공고문 작성" src="icon_write.png" />
                        </div>
                    </div>
                </nav>
            </aside>
        </div>
    );
}

export default Aside;