import '../../App.css'
import { LoginModal, LoginPage } from '../index'
import React, { useState } from 'react'

function Start() {
  const [isLShowing, setLoginShowing] = useState(false)
  const openLogin = () => {
    setLoginShowing(true)
  }
  const [isRShowing, setRegisterShowing] = useState(false)
  const openRegister = () => {
    setRegisterShowing(true)
  }
  return (
    //여기부터 JSX
    <div className="App">
      <div className="start">
        <img className="logo" alt="MAT로고" src="logo.png" />
        <button className="loginbtn btn" onClick={openLogin}>
          로그인
        </button>
        <button className="registerbtn btn" onClick={openRegister}>
          회원가입
        </button>
      </div>
      <div>{isLShowing && <LoginPage />}</div>
      <div>{isRShowing && <LoginModal />}</div>
    </div>
    //여기까지 JSX
  )
}

export default Start
