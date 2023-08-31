import React from 'react';
import HeaderNav from './sections/general/components/HeaderNav';
import Home from './sections/general/pages/Home';
import './index.css';
import Footer from './sections/general/components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <HeaderNav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
