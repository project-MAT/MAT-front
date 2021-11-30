import './App.css';
import { createPortal } from "react-dom";

function Register() {
    return createPortal(
        //여기부터 JSX
        <div className="popup">
            <div className="popup_register">
                <img src="logo_popup.png" />
                <p className="logintext">회원가입</p>
                <p className="idtext">이름</p><input className="lname popupinput" type="text" placeholder=" 이름을 입력하세요" />
                <p className="pwtext">디스코드</p><input className="inputpw popupinput" type="text" placeholder=" 디스코드를 입력하세요" />
                <p className="idtext">전공</p><input className="inputid popupinput" type="text" placeholder=" 전공을 입력하세요" />
                <p className="pwtext">기수</p><input className="inputpw popupinput" type="text" placeholder=" 기수를 입력하세요" />
                <p className="idtext">아이디</p><input className="inputid popupinput" type="text" placeholder=" 아이디를 입력하세요" />
                <p className="pwtext">비밀번호</p><input className="inputpw popupinput" type="password" placeholder=" 비밀번호를 입력하세요" />
                <button className="popupbtn" >회원가입</button>
            </div>
        </div>,
        //여기까지 JSX
        document.getElementById("RegisterPopup")
    );
}

export default Register;