import './App.css';
import { createPortal } from "react-dom";

function Login() {
    return createPortal(
        //여기부터 JSX
        <div className="popup">
            <div className="popup_login">
                <img src="logo_popup.png" />
                <p className="logintext">로그인</p>
                <p className="idtext">아이디</p><input className="inputid popupinput" type="text" placeholder=" 아이디를 입력하세요" />
                <p className="pwtext">비밀번호</p><input className="inputpw popupinput" type="password" placeholder=" 비밀번호를 입력하세요" />
                <button className="popupbtn" >로그인</button>
            </div>
        </div>,
        //여기까지 JSX
        document.getElementById("LoginPopup")
    );
}

export default Login;