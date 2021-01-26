import React from "react";
import About from "./components/About/About";
import MovingBackground from "./components/MovingBackground/MovingBackground";
import Projects from "./components/Projects/Projects";

interface Props {}

export const Content: React.FC<Props> = () => {
  return (
    <section className="Content">
      <MovingBackground />
      <About />
      <Projects />
    </section>
  );
};

export default Content;
