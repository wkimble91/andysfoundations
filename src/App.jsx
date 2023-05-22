import React, { useState, useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

export default function App() {
  useEffect(() => {
    document.addEventListener('scroll', (e) => {
      const scroll = document.documentElement.scrollTop;
      if (scroll >= 100) {
        document.querySelector('body').classList.add('scroll');
      } else {
        document.querySelector('body').classList.remove('scroll');
      }
    });
  }, []);
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
