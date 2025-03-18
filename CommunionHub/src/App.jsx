import { useState } from 'react';
import Home from './components/home/home';
import Event from './components/event/event';
import Navbar from './components/navbar/navbar';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './components/Navbar/About/about';

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/Event'} element={<Event />} />
        <Route path={'/About'} element={<About />} />
      </Routes>
    </>
  );
}

export default App;
