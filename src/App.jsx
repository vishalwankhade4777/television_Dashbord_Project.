import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Details from './pages/Details';

const App = () => (
  <Router>
    <Header />
    <main style={{ padding: '1rem' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </main>
  </Router>
);

export default App;
