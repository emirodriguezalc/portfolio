import React from 'react';
import './MovingBackground.scss';

interface Props {
  title?: string;
}

const MovingBackground: React.FC<Props> = () => {
  return (
    <section className="MovingBackground" id="movingBackground">
      <div className="video-container">
        <video
          className="movingBackground-video"
          src="/assets/Pexels-video.mp4"
          muted
          loop
          autoPlay
        />
      </div>
      <p>Hello</p>
    </section>
  );
};

export default MovingBackground;
