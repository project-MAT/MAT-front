import './App.css';
import { createPortal } from "react-dom";
import { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    handleJoin = () => {
        fetch('/v1/member/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            }),
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                if (response.success === true) {
                    return alert('로그인에 성공하였습니다');
                }

                if (response.success !== true) {
                    return alert('로그인에 실패하였습니다.');
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
                <div className="popup_login">
                    <img src="logo_popup.png" />
                    <p className="logintext">로그인</p>
                    <p className="idtext">이메일</p><input id="email" name="email" className="popupinput" type="text" placeholder=" 이메일 주소를 입력하세요" onChange={this.handleInput} />
                    <p className="pwtext">비밀번호</p><input id="password" name="password" className="popupinput" type="password" placeholder=" 비밀번호를 입력하세요" onChange={this.handleInput} />
                    <button className="popupbtn" onClick={this.handleJoin}>로그인</button>
                </div>
            </div>,
            //여기까지 JSX
            document.getElementById("LoginPopup")
        );
    }
}

export default Login;