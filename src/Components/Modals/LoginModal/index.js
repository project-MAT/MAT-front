import '../Modal.css'
import { createPortal } from 'react-dom'
import { Component } from 'react'

class LoginModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  handleJoin = () => {
    fetch('/auth/login', {
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
        console.log(response)
        if (response.islogin === true) {
          alert('로그인에 성공하였습니다')
          window.location.replace('/')
        }
        if (response.islogin !== true) {
          alert('로그인에 실패하였습니다.')
          window.location.replace('/')
        }
      })
  }

  handleInput = e => {
    const { value, id } = e.target
    this.setState({ [id]: value })
  }

  render() {
    const {closeLogin} = this.props;
    return createPortal(
      <div className="modal" onClick={closeLogin}>
        <div className="modal_login" onClick={e => e.stopPropagation()}>
          <img className="modallogo" alt="MAT로고" src="logo.png" />
          <p className="logintext">로그인</p>
          <p className="text">이메일</p>
          <input id="email" className="modalinput" type="text" placeholder="이메일 주소를 입력하세요" onChange={this.handleInput} />
          <p className="text">비밀번호</p>
          <input id="password" className="modalinput" type="password" placeholder="비밀번호를 입력하세요" onChange={this.handleInput} />
          <button className="submitbtn" onClick={this.handleJoin}>로그인</button>
        </div>
      </div>,
      document.getElementById('LoginModal')
    )
  }
}

export default LoginModal