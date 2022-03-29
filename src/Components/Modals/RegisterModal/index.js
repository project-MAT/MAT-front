import "../RegisterModal/style.css";
import { createPortal } from "react-dom";
import { Component } from "react";

class RegisterModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: "",
      cardinalNum: "",
      majority: "",
      discordNum: "",
    };
  }

  handleJoin = () => {
    fetch("/v1/member/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.success === true) {
          alert("회원가입에 성공하였습니다");
          window.location.replace("/");
        }

        if (response.success !== true) {
          alert("회원가입에 실패하였습니다.");
          window.location.replace("/");
        }
      });
  };

  handleInput = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { closeRegister } = this.props;
    return createPortal(
      <div className="modal" onClick={closeRegister}>
        <div className="modal_register" onClick={(e) => e.stopPropagation()}>
          <img className="modallogo" alt="MAT로고" src="logo.png" />
          <p className="logintext">회원가입</p>
          <p className="text">이메일</p>
          <input
            name="email"
            className="modalinput"
            type="text"
            placeholder=" 이메일 주소를 입력하세요"
            onChange={this.handleInput}
          />
          <p className="text">이름</p>
          <input
            name="name"
            className="modalinput"
            type="text"
            placeholder=" 이름을 입력하세요"
            onChange={this.handleInput}
          />
          <p className="text">비밀번호</p>
          <input
            name="password"
            className="modalinput"
            type="password"
            placeholder=" 비밀번호를 입력하세요"
            onChange={this.handleInput}
          />

          <p className="text">기수</p>
          <input
            list="grade_list"
            name="cardinalNum"
            className="modalinput"
            type="text"
            placeholder=" 기수를 입력하세요"
            onChange={this.handleInput}
          />
          <datalist id="grade_list">
            <option value="4기" />
            <option value="5기" />
            <option value="6기" />
          </datalist>

          <p className="text">전공</p>
          <input
            list="majority_list"
            name="majority"
            className="modalinput"
            type="text"
            placeholder=" 전공을 입력하세요"
            onChange={this.handleInput}
          />
          <datalist id="majority_list">
            <option value="프론트엔드" />
            <option value="백엔드" />
            <option value="게임개발" />
            <option value="안드로이드" />
            <option value="iOS" />
            <option value="네트워크" />
            <option value="인공지능" />
            <option value="하드웨어" />
            <option value="IoT" />
            <option value="infra" />
            <option value="UI & UX" />
          </datalist>
          <p className="text">디스코드</p>
          <input
            name="discordNum"
            className="modalinput"
            type="text"
            placeholder=" 디스코드 고유번호(#제외)를 입력하세요"
            onChange={this.handleInput}
          />
          <button className="submitbtn" onClick={this.handleJoin}>
            회원가입
          </button>
        </div>
      </div>,
      document.getElementById("RegisterModal"),
    );
  }
}

export default RegisterModal;
