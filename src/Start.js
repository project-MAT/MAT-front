import './App.css';
import Login from './Login';
import Register from './Register';
import React, { useState } from "react";


function Start() {
  const [isLShowing, setLoginShowing] = useState(false);
  const openLogin = () => {
    setLoginShowing(true);
  };
  const [isRShowing, setRegisterShowing] = useState(false);
  const openRegister = () => {
    setRegisterShowing(true);
  };
  return (

    //여기부터 JSX
    <div className="App">
      <div className="start">
        <img className="logo" alt="MAT로고" src="logo.png" />
        <button className="loginbtn btn" onClick={openLogin}>로그인</button>
        <button className="registerbtn btn" onClick={openRegister}>회원가입</button>
      </div>
      <div>{isLShowing && <Login />}</div>
      <div>{isRShowing && <Register />}</div>
    </div>
    //여기까지 JSX
  );
}

export default Start;