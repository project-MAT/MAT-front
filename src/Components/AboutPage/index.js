import '../../App.css'

function AboutPage() {
  return (
    <div className="App">
      <main>
        <img className="logo_about" alt="MAT로고" src="logo_about.png" />
        <p div className="maintext">
          MAT를 통해 자유롭게 프로젝트 멤버를 구성하세요
          <br />
          또 자신이 원하는 프로젝트를 찾아 지원하세요
          <br />
          저희 MAT가 여러분의 프로젝트를 응원합니다
        </p>
        <p div className="subtext">
          MAT는 프로젝트를 위해 팀을 구성하는 과정의 서비스입니다.
          <br />
          욕설이나 비속어, 다른이를 비방하는 공고문은 통보없이 삭제될 수
          있습니다.
          <br />
          작성자의 잘못된 정보로 생기는 문제에 대해서는 책임지지 않습니다.
          <br />
          회원가입시 저장된 개인정보는 보호되며, 계정 조회 외 다른 용도로 쓰이지
          않습니다.
          <br />
          MAT를 이용하면서 불편한 점이나 궁금한 점은 s00000@gsm.hs.kr에
          문의해주세요
        </p>
      </main>
    </div>
  )
}

export default AboutPage
