import React from 'react';
import Users from './Users';
import Header from './Header';
import Aside from './Aside';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Users />
      <Aside />
      <Footer />
    </div>
  )
}

export default App;