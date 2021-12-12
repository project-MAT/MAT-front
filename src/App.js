import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import * as P from './Page'

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<P.Start />} />
          <Route path="/About" element={<P.About />} />
          <Route path="/Question" element={<P.Question />} />
          <Route path="/*" element={<P.NotFound />} />
        </Routes>
      </BrowserRouter>
    )
  }
}
