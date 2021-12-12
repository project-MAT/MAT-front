import React from 'react'
import Header from './Components/Common/Header'
import Footer from './Components/Common/Footer'
import Aside from './Components/Common/Aside'
import GetQuestion from './GetQuestion'

function Question() {
  return (
    <div className="App">
      <Header />
      <GetQuestion />
      <Aside />
      <Footer />
    </div>
  )
}

export default Question
