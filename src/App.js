import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './Components/About'
import Page404 from './Components/NotFound'
import Start from './Components/Start'
import Question from './Question'

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/About" element={<About />} />
          <Route path="/Question" element={<Question />} />
        </Routes>
      </BrowserRouter>
    )
  }
}
