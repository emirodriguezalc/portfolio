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
        <h1 className="movingBackground-title">Emilia Rodriguez Gimenez</h1>
        <h2 className="movingBackground-subtitle">Full stack developer</h2>
      </div>
    </section>
  );
};

export default MovingBackground;
