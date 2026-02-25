import React from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import Rooms from './sections/rooms';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';



export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Rooms />
      <Gallery />
      <Contact />
    </>
  );
}
