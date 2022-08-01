import React from 'react';
import Hero from './components/hero/Hero';
import Navbar from './components/Navbar';
import './App.css';
import Catalog from './components/Catalog';
import Home from './components/Home';
import Support from './components/Support';
import { Route, Routes, Link } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
      <Route exact path='/component/home' component={Home} />
      <Route exact path='/catalog' component={Catalog} />
      <Route exact path='/support' component={Support} />
      {/* <Route exact path='/' component={Home} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
