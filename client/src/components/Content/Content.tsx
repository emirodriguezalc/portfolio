import React from 'react';
import About from './components/About/About';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './Content.scss';

interface Props {}

export const Content: React.FC<Props> = () => {
  return (
    <section className="Content">
      <Header />
      <div className="parallax">
        <video
          className="content-video"
          src="/assets/coding-background.mp4"
          muted
          loop
          autoPlay
        />
        <div className="parallax-inner">
          <About />
          <Skills />
          <Projects />
        </div>
      </div>
      <Contact />
    </section>
  );
};

export default Content;
