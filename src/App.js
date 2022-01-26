import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import * as P from './Pages'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<P.Start />} />
        <Route path="/main" element={<P.Main />} />
        <Route path="/About" element={<P.About />} />
        <Route path="/rank" element={<P.Rank />} />
        <Route path="/*" element={<P.NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
