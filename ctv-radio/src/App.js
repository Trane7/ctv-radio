import React from 'react';
import Catalog from './components/catalog/Catalog';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


function App() {
  return (
    <>
     <Navbar />
     <Hero />
     <Catalog />
     <Contact />
     <Footer />
    </>
  );
}

export default App;
