import '../../../App.css'
import { createPortal } from 'react-dom'
import { Component } from 'react'

class EditModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: '',
    }
  }

  handleJoin = () => {
    fetch('/v1/question', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: this.state.title,
        content: this.state.content,
      }),
    })
      .then(response => response.json())
      .then(response => {
        console.log(response)
        if (response.success === true) {
          return alert('글 등록에 성공하였습니다')
        }

        if (response.success !== true) {
          return alert('글 등록에 실패하였습니다.')
        }
      })
  }

  handleInput = e => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  render() {
    return createPortal(
      //여기부터 JSX
      <div className="popup">
        <div className="popup_post">
          <img className="icon_popup" src="logo_popup.png" />
          <p className="logintext">글쓰기</p>
          <input
            id="title"
            name="title"
            className="P11 popupinput"
            type="text"
            placeholder=" 제목을 입력하세요"
            onChange={this.handleInput}
          />
          <input
            id="content"
            name="content"
            className="P22 popupinput"
            type="text"
            placeholder=" 내용을 입력하세요"
            onChange={this.handleInput}
          />
          <input
            id="tag"
            name="tag"
            className="P33 popupinput"
            type="text"
            placeholder=" 해시 태그를 이용해 홍보해 보세요 ex)#디자이너 #MAT"
          />
          <img className="icon_sharp" src="./icon_sharp.png" />
          <button className="popupbtn" onClick={this.handleJoin}>
            완료
          </button>
        </div>
      </div>,
      //여기까지 JSX
      document.getElementById('PostPopup')
    )
  }
}

export default EditModal
