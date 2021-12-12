import '../../App.css'
import { createPortal } from 'react-dom'
import { Component } from 'react'
import axios from 'axios'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  handleJoin = () => {
    fetch('/v1/member/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then(response => response.json())
      .then(response => {
        console.log(response.data)
        const { Authorization } = response.data.accessToken
        const { RefreshToken } = response.data.refreshToken
        console.log({ Authorization })
        console.log({ RefreshToken })
        // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${Authorization}`
        axios.defaults.headers.common['RefreshToken'] = `Bearer ${RefreshToken}`

        console.log(Authorization)
        if (response.success === true) {
          alert('로그인에 성공하였습니다')
          window.location.replace('/About')
        }
        if (response.success !== true) {
          alert('로그인에 실패하였습니다.')
          window.location.replace('/')
        }
      })
  }

  handleInput = e => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }
  render() {
    return createPortal(
      //여기부터 JSX
      <div className="popup">
        <div className="popup_login">
          <img src="logo_popup.png" />
          <p className="logintext">로그인</p>
          <p className="L1 idtext">이메일</p>
          <input
            id="email"
            name="email"
            className="L11 popupinput"
            type="text"
            placeholder=" 이메일 주소를 입력하세요"
            onChange={this.handleInput}
          />
          <p className="L2 pwtext">비밀번호</p>
          <input
            id="password"
            name="password"
            className="L22 popupinput"
            type="password"
            placeholder=" 비밀번호를 입력하세요"
            onChange={this.handleInput}
          />
          <button className="popupbtn" onClick={this.handleJoin}>
            로그인
          </button>
        </div>
      </div>,
      //여기까지 JSX
      document.getElementById('LoginPopup')
    )
  }
}

export default Login
