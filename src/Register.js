import './App.css';
import { createPortal } from "react-dom";
import { Component } from 'react';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            password: '',
            cardinalNum: '',
            majority: '',
            discordNum: '',
        };
    }

    handleJoin = () => {
        fetch('/v1/member/join', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
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
                console.log(response);
                if (response.success === true) {
                    return alert('회원가입에 성공하였습니다');
                }

                if (response.success !== true) {
                    return alert('회원가입에 실패하였습니다.');
                }
            });
    };

    handleInput = e => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        return createPortal(
            //여기부터 JSX
            <div className="popup">
                <div className="popup_register">
                    <img src="logo_popup.png" />
                    <p className="logintext">회원가입</p>
                    <p className="idtext">이메일</p><input id="email" name="email" className="popupinput" type="text" placeholder=" 이메일 주소를 입력하세요" onChange={this.handleInput} />
                    <p className="idtext">이름</p><input id="name" name="name" className="popupinput" type="text" placeholder=" 이름을 입력하세요" onChange={this.handleInput} />
                    <p className="pwtext">비밀번호</p><input id="password" name="password" className="popupinput" type="password" placeholder=" 비밀번호를 입력하세요" onChange={this.handleInput} />
                    <p className="pwtext">기수</p><input id="cardinalNum" name="cardinalNum" className="popupinput" type="text" placeholder=" 기수를 입력하세요" onChange={this.handleInput} />
                    <p className="idtext">전공</p><input id="majority" name="majority" className="popupinput" type="text" placeholder=" 전공을 입력하세요" onChange={this.handleInput} />
                    <p className="pwtext">디스코드</p><input id="discordNum" name="discordNum" className="popupinput" type="text" placeholder=" 디스코드 고유번호(#제외)를 입력하세요" onChange={this.handleInput} />
                    <button className="popupbtn" onClick={this.handleJoin}>회원가입</button>
                </div>
            </div>,
            //여기까지 JSX
            document.getElementById("RegisterPopup")
        );
    }
}

export default Register;