import React from 'react';
import Header from './Header';
import Aside from './Aside';
import Footer from './Footer';
import GetQuestion from './GetQuestion';

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

export default Question;