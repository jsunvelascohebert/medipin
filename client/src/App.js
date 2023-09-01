import React from 'react';
import HeaderNav from './sections/general/components/HeaderNav';
import Home from './sections/general/pages/Home';
import './index.css';
import Footer from './sections/general/components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './sections/general/pages/About';

function App() {
  return (
    <>
      <Router>
        <HeaderNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<About />} />
          <Route path="/pins" element={<About />} />
          <Route path="/note" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
