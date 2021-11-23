import './App.css';

function Page404() {
  return (

    //여기부터 JSX
    <div className="App">
        <img className="logo_404" alt="MAT로고" src="logo_404.png" />
        <img className="icon_404" alt="MAT로고" src="icon_404.png" />
        <p className="errortext">페이지를 찾지 못했어요 :(<br />입력하신 주소가 정확한지 한번 더 확인해주세요</p>
    </div>
    //여기까지 JSX
  );
}

export default Page404;