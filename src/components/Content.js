import React from 'react';
import Splash from './Splash';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

export default function Content() {
  return (
    <div className="h-screen overflow-y-scroll no-scrollbar">
      <Splash />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}