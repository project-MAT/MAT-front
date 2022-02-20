import '../EditModal/style.css'
import { createPortal } from 'react-dom'
import { Component } from 'react'

class EditModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: '',
      tag: '',
    }
  }

  handleJoin = () => {
    fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: this.state.title,
        content: this.state.content,
        tag: this.state.tag,
      }),
    })
      .then(response => response.json())
      .then(response => {
        console.log(response)
        if (response.islogin === true) {
          alert('글 등록에 성공하였습니다')
          window.location.replace('/')
        }
        if (response.islogin !== true) {
          alert('글 등록에 실패하였습니다.')
          window.location.replace('/')
        }
      })
  }

  handleInput = e => {
    const { value, id } = e.target
    this.setState({ [id]: value })
  }

  render() {
    const { closeEdit } = this.props;
    return createPortal(
      <div className="modal" onClick={closeEdit}>
        <div className="modal_edit" onClick={e => e.stopPropagation()}>
          <img className="modallogo" alt="MAT로고" src="logo.png" />
          <div className='editform'>
            <input id="title" className="titleinput" type="text" placeholder="제목을 작성해주세요" onChange={this.handleInput} />
            <textarea id="content" className="contentinput" type="text" placeholder="모집 내용에 대해서 작성해주세요" onChange={this.handleInput} />
            <input id="tag" className="taginput" type="text" placeholder="해시태그를 이용해 홍보해보세요 ex) #디자이너 #MAT" onChange={this.handleInput} />
          </div>
          <button className="submitbtn" onClick={this.handleJoin}>등록</button>
        </div>
      </div>,
      document.getElementById('EditModal')
    )
  }
}

export default EditModal
