import '../Start/Start.css'
import React, { useState } from 'react'
import LoginModal from "../Modals/LoginModal/index";
import RegisterModal from '../Modals/RegisterModal';

function Start() {
  const [loginShowing, setLoginShowing] = useState(false);
  const openLogin = () => {
    setLoginShowing(true);
  };
  const closeLogin=(e) => {
    setLoginShowing(false);
  };

  const [registerShowing, setRegisterShowing] = useState(false);
  const openRegister = () => {
    setRegisterShowing(true);
  };
  const closeRegister=(e) => {
    setRegisterShowing(false);
  };

  return (
    <div className="App">
      <div className="start">
        <img className="startlogo" alt="MAT로고" src="logo_big.png" />
        <button className="login popupbtn" onClick={openLogin}>로그인</button>
        <button className="register popupbtn" onClick={openRegister}>회원가입</button>
      </div>
      {loginShowing && <LoginModal />}
      {loginShowing && <LoginModal closeLogin={closeLogin} />}
      {registerShowing && <RegisterModal/>}
      {registerShowing && <RegisterModal closeRegister={closeRegister} />}
    </div>
  )
}

export default Start
