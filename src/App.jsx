import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/productos" element={<ProductsPage />} />
      </Routes>
      <ContactFooter />
    </div>
  );
}

export default App;