import React from 'react';
import HeaderNav from './sections/general/components/HeaderNav';
import Home from './sections/general/pages/Home';
import './index.css';
import Footer from './sections/general/components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './sections/general/pages/About';
import Search from './sections/search/pages/Search';
import Topics from './sections/pins/pages/Topics';
import { BannerProvider } from './contexts/BannerContext';
import Banner from './sections/utility/Banner';

function App() {
  return (
    <>
      <Router>
        <BannerProvider>    
          <Banner />
          <HeaderNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/search" element={<Search />} />
            <Route path="/pins" element={<Topics />} />
            <Route path="/note" element={<About />} />
          </Routes>
          <Footer />
        </BannerProvider>
      </Router>
    </>
  );
}

export default App;
