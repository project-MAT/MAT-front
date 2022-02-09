import '../Modal.css'
import { createPortal } from 'react-dom'
import { Component } from 'react'

class RegisterModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      name: '',
      password: '',
      cardinalNum: '',
      majority: '',
      discordNum: '',
    }
  }

  handleJoin = () => {
    fetch('/v1/member/join', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        name: this.state.name,
        password: this.state.password,
        cardinalNum: this.state.cardinalNum,
        majority: this.state.majority,
        discordNum: this.state.discordNum,
      }),
    })
      .then(response => response.json())
      .then(response => {
        console.log(response)
        if (response.success === true) {
          alert('회원가입에 성공하였습니다')
          window.location.replace('/')
        }

        if (response.success !== true) {
          alert('회원가입에 실패하였습니다.')
          window.location.replace('/')
        }
      })
  }

  handleInput = e => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const {closeRegister} = this.props;
    return createPortal(
      <div className="modal" onClick={closeRegister}>
        <div className="modal_register" onClick={e => e.stopPropagation()}>
          <img className="modallogo" alt="MAT로고" src="logo.png" />
          <p className="logintext">회원가입</p>
          <p className="text">이메일</p>
          <input name="email" className="modalinput" type="text" placeholder=" 이메일 주소를 입력하세요" onChange={this.handleInput} />
          <p className="text">이름</p>
          <input name="name" className="modalinput" type="text" placeholder=" 이름을 입력하세요" onChange={this.handleInput} />
          <p className="text">비밀번호</p>
          <input name="password" className="modalinput" type="password" placeholder=" 비밀번호를 입력하세요" onChange={this.handleInput} />
          <p className="text">기수</p>
          <input name="cardinalNum" className="modalinput" type="text" placeholder=" 기수를 입력하세요" onChange={this.handleInput} />
          <p className="text">전공</p>
          <input name="majority" className="modalinput" type="text" placeholder=" 전공을 입력하세요" onChange={this.handleInput} />
          <p className="text">디스코드</p>
          <input name="discordNum" className="modalinput" type="text" placeholder=" 디스코드 고유번호(#제외)를 입력하세요" onChange={this.handleInput} />
          <button className="submitbtn" onClick={this.handleJoin}>회원가입</button>
        </div>
      </div>,
      document.getElementById('RegisterModal')
    )
  }
}

export default RegisterModal