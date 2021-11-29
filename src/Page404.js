import './App.css';

function Page404() {
  return (

    //여기부터 JSX
    <main>
        <img className="logo_404" alt="MAT로고" src="logo_404.png" />
        <img className="icon_404" alt="MAT로고" src="icon_404.png" />
        <p className="errortext">페이지를 불러오지 못했어요 :(<br />서버 점검중이거나 입력하신 주소가 잘못되었습니다</p>
    </main>
    //여기까지 JSX
  );
}

export default Page404;