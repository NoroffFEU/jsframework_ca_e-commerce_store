import React from 'react';
import NavbarLogo from './components/NavbarLogo'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Product from './components/Product';

function App() {
  return (
    <div>
      <NavbarLogo />
      <Navbar />
      <Home />
      <Product />
      <Footer />
      {/* Add your content here */}
    </div>
  );
}

export default App;
