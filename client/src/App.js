import React, {useEffect, useState} from 'react';
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
import AuthContext from './contexts/AuthContext';
import jwtDecode from "jwt-decode";

const EMPTY_USER = {
  userId: 0,
  username: '',
  roles: []
};

function App() {

  const [user, setUser] = useState(EMPTY_USER);

  useEffect(() => {
    const token = localStorage.getItem('jwt_token');
    if (token) {
      login(token);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('jwt_token', token);
    const { sub: username, authorities: authoritiesString } = jwtDecode(token);
		const roles = authoritiesString.split(',');
    const user = {
		  username,
		  roles,
		  token,
		  hasRole(role) {
			return this.roles.includes(role);
		  }
		};
		setUser(user);
		return user;
  }

  const auth = {
    user: user ? { ...user } : EMPTY_USER,
    isLoggedIn() {
      return !!user.username;
    },
    hasRole(role){
      return this.user.roles.includes(role);
    },
    onAuthenticated(user) {
      setUser(user);
      console.log(user);
    },
    signOut() {
      localStorage.removeItem('jwt_token');
      setUser(EMPTY_USER);
    }
  };

  return (<>
    <AuthContext.Provider value={auth}>
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
    </AuthContext.Provider>
  </>);
}

export default App;
