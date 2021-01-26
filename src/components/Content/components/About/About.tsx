import React from 'react';
import './About.scss'

interface Props {
  title?: string,
}

export const About: React.FC<Props> = () => {
  return (
    <section className="About" id="about">
      <div> About section</div>
    </section>
  )
}

export default About;
