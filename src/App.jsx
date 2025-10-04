import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import TyresPage from '@/pages/TyresPage';
import WheelsPage from '@/pages/WheelsPage';
import ServicesPage from '@/pages/ServicesPage';
import GalleryPage from '@/pages/GalleryPage';
import AccessoriesPage from '@/pages/AccessoriesPage';
import StoreLocatorPage from '@/pages/StoreLocatorPage';
import ContactPage from '@/pages/ContactPage';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tyres" element={<TyresPage />} />
          <Route path="/wheels" element={<WheelsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
          <Route path="/store-locator" element={<StoreLocatorPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Toaster />
      </Layout>
    </Router>
  );
}

export default App;