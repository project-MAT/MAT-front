import React from "react";
import "./style.css";
import * as I from "../../Assets/SVG";

const AboutPage = () => {
  return (
    <main className="AboutSection">
      <div className="lineSection">
        <div className="line pinkLine"></div>
        <div className="line orangeLine"></div>
        <div className="line yellowLine"></div>
      </div>
      <div className="TextSection">
        <I.AboutLogo />
        <p className="mainText">
          MAT를 통해 자유롭게 프로젝트 멤버를 구성하세요.
          <br />
          또 자신이 원하는 프로젝트를 찾아 지원하세요.
          <br />
          저희 MAT가 여러분의 프로젝트를 응원합니다.
        </p>
        <p className="subText">
          MAT는 프로젝트를 위해 팀을 구성하는 과정의 서비스입니다. <br />
          욕설이나 비속어, 다른 이를 비방하는 공고문은 통보없이 삭제될 수
          있습니다. <br />
          작성자의 잘못된 정보로 생기는 문제에 대해서는 책임지지 않습니다.
          <br />
          회원가입시 저장된 개인정보는 보호되며, 계정 조회 외 다른 용도로 쓰이지
          않습니다. <br /> MAT를 이용하면서 불편한 점이나 궁금한 점은
          @@@@@@@@@@@@@@@@@에 문의해주세요. <br /> <br />
          <span className="yellow">FE :</span> 유시온, 조윤겸
          <span className="yellow">BE :</span> 조재영
          <span className="yellow">DESIGN :</span> 양세련
        </p>
        <footer className="FooterSection">
          <I.SmallLogo />
          <div className="DescSection">
            <p className="footerText">
              Copyright 2022. MAT All rights reserved.
            </p>
            <p className="footerText">MAIL@@@@@@@@@@@@@ </p>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default AboutPage;
