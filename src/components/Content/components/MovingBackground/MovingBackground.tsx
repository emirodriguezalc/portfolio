import React from 'react';
import './MovingBackground.scss';

interface Props {
  title?: string;
}

const MovingBackground: React.FC<Props> = () => {
  return (
    <section className="MovingBackground" id="movingBackground">
      <p>Hello</p>
    </section>
  );
};

export default MovingBackground;
