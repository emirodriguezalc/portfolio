import React, { useState } from 'react';
import './ProjectBox.scss';
import ReactCardFlip from 'react-card-flip';

interface Props {}

export const ProjectBox: React.FC<Props> = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e: any) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped}>
      <article role="presentation" onClick={handleClick}>
        <img src="/assets/projects/hamster-project-2.jpg" alt="" />
      </article>
      <article role="presentation" onClick={handleClick}>
        <div className="">
          <img src="/assets/projects/hamster-project-2.jpg" alt="" />
          <button type="button">SHOW PREVIEW</button>
          <button type="button">LINK TO SOURCE CODE</button>
        </div>
      </article>
    </ReactCardFlip>
  );
};

export default ProjectBox;
