import * as I from "../../Assets/SVG";
import "./style.css";

const NotFoundPage = () => {
  return (
    <main className="NotFoundPage">
      <I.NotfoundLogo />
      <p className="message">
        페이지를 찾지 못했어요 :( <br />
        입력하신 주소가 정확한지 한번 더 확인해주세요
      </p>
    </main>
  );
};

export default NotFoundPage;
