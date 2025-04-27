import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingChat from './pages/LandingChat';
import Home from './pages/Home';
import HackathonDetail from './pages/HackathonDetail';
import EmailForm from './pages/EmailForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingChat />} />
      <Route path="/timeline" element={<Home />} />
      <Route path="/hackathon/:hackathonTitle" element={<HackathonDetail />} />
      <Route path="/email-form/:hackathonTitle" element={<EmailForm />} />
    </Routes>
  );
}

export default App;
