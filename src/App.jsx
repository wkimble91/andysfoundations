import React, { useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

export default function App() {
  return (
    <>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}
