/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './ProjectBox.scss';
import ReactCardFlip from 'react-card-flip';
import ModalVideo from 'react-modal-video';

interface Props {
  title: string;
  mediaSrc: string;
  sourceCodeLink: string;
  gifs: string;
}

export const ProjectBox: React.FC<Props> = ({
  title,
  mediaSrc,
  sourceCodeLink,
  gifs,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const handleClick = (e: any) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <section className="project-container">
      <h1 className="project-container-title">{title}</h1>
      <ModalVideo
        channel="custom"
        autoplay
        isOpen={isOpen}
        url={gifs}
        onClose={() => setOpen(false)}
      />
      <ReactCardFlip isFlipped={isFlipped}>
        <article role="presentation" onClick={handleClick} className="project-front">
          <img src={mediaSrc} className="project-container-media" alt="" />
        </article>
        <article role="presentation" onClick={handleClick} className="project-back">
          <img src={mediaSrc} className="project-container-media back" alt="" />
          <button
            type="button"
            className={`project-button ${gifs}`}
            onClick={() => setOpen(true)}
          >
            Take a look
          </button>
          <button
            type="button"
            onClick={() => window.open(sourceCodeLink)}
            className="project-button github"
          >
            Go to source code
            <img
              src="/assets/projects/github.png"
              alt="github"
              className="project-button-icon"
            />
          </button>
        </article>
      </ReactCardFlip>
    </section>
  );
};

export default ProjectBox;
