import React, { useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AdoptionPage from './pages/AdoptionPage';
import ContactFooter from './components/ContactFooter';

function App() {
  const contactFooterRef = useRef(null);

  return (
    <div className="app-container">
      <Header contactFooterRef={contactFooterRef} />
      <Routes>
        <Route path="/" element={<HomePage contactFooterRef={contactFooterRef} />} />
        <Route path="/productos" element={<ProductsPage />} />
        <Route path="/adoptar" element={<AdoptionPage />} /> 
      </Routes>
      <ContactFooter ref={contactFooterRef} />
    </div>
  );
}

export default App;