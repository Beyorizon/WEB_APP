import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Clienti from './pages/Clienti';
import Dipendenti from './pages/Dipendenti';
import Servizi from './pages/Servizi';
import Spese from './pages/Spese';

import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/clienti" element={<Clienti />} />
          <Route path="/dipendenti" element={<Dipendenti />} />
          <Route path="/servizi" element={<Servizi />} />
          <Route path="/spese" element={<Spese />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;


