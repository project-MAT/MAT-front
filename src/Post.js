import './App.css';
import { createPortal } from "react-dom";
import { Component } from 'react';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
        };
    }

    handleJoin = () => {
        fetch('/v1/question', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "RefreshToken": "eyJhbGciOiJIUzI1NiJ9.eyJ0b2tlblR5cGUiOiJyZWZyZXNoVG9rZW4iLCJpYXQiOjE2MzcyMzYwOTUsImV4cCI6MTYzNzg0MDg5NX0.6DunsYreAq7f8yNy8D56eH1DrJGOaqVyWfwIrnrIMec"
            },
            body: JSON.stringify({
                title: this.state.title,
                content: this.state.content,
            }),
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                if (response.success === true) {
                    return alert('글 등록에 성공하였습니다');
                }

                if (response.success !== true) {
                    return alert('글 등록에 실패하였습니다.');
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
                    <p className="idtext">제목</p><input id="title" name="title" className="popupinput" type="text" placeholder=" 제목을 입력하세요" onChange={this.handleInput} />
                    <p className="idtext">내용</p><input id="content" name="content" className="popupinput" type="text" placeholder=" 내용을 입력하세요" onChange={this.handleInput} />
                    <button className="popupbtn" onClick={this.handleJoin}>완료</button>
                </div>
            </div>,
            //여기까지 JSX
            document.getElementById("PostPopup")
        );
    }
}

export default Post;