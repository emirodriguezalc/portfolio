import React from 'react';
import About from './components/About/About';
import MovingBackground from './components/MovingBackground/MovingBackground';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

interface Props {}

export const Content: React.FC<Props> = () => {
  return (
    <section className="Content">
      <MovingBackground />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </section>
  );
};

export default Content;
