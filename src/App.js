
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Navbar1 from './components/Navbar1';
import Header from './components/Header';
import Content from './components/Content';
import AboutSection from './components/About'
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" style={{backgroundColor: 'black'}}>
      <Navbar1 />
      <Header /><br/><br/>
      <Content />
      <AboutSection />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
