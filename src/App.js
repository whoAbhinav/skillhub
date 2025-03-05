import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Registration from './components/Registration';
import Contact from './components/Contact';

function App() {
  return (
    <Router> 
        <Navbar />
        <Header />
        <div style={{ minHeight: '60vh', padding: '1px', fontSize: '24px' }}> 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
        <Footer />
    </Router>
);
}

export default App;
