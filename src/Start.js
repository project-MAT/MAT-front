import './App.css';

function Start() {
  return (

    //여기부터 JSX
    <div className="App">
      <div className="start">
        <img className="logo" alt="MAT로고" src="logo.png" />
        <button className="loginbtn btn">로그인</button>
        <button className="registerbtn btn">회원가입</button>
      </div>
    </div>
    //여기까지 JSX
  );
}

export default Start;