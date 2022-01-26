import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import * as P from './Pages'

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<P.Start />} />
          <Route path="/main" element={<P.Main />} />
          <Route path="/About" element={<P.About />} />
          <Route path="/rank" element={<P.Question />} />
          <Route path="/*" element={<P.NotFound />} />
        </Routes>
      </BrowserRouter>
    )
  }
}
