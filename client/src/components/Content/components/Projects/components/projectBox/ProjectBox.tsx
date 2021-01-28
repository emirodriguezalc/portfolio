import React, { useState } from 'react';
import './ProjectBox.scss';

interface Props {}

export const ProjectBox: React.FC<Props> = () => {
  const [cardState, useCardState] = useState(false);
  const [flipState, setFlipState] = useState(false);

  const handleClick = (e: any) => {
    e.preventDefault();
    const innerContainer = document.querySelector('.ProjectBox__inner-container');
    if (innerContainer) {
      innerContainer.classList.add('flip');
      setFlipState(!flipState);
      setTimeout(() => {
        innerContainer.classList.remove('flip');
        useCardState(!cardState);
      }, 1000);
    }
  };

  return (
    <>
      {cardState === false ? (
        <article className="ProjectBox" role="presentation" onClick={(e) => handleClick(e)}>
          <div className="ProjectBox__inner-container front">
            <img
              className="project-image"
              src="/assets/projects/hamster-project-2.jpg"
              alt=""
            />
          </div>
        </article>
      ) : (
        <article className="ProjectBox" role="presentation" onClick={(e) => handleClick(e)}>
          <div className="ProjectBox__inner-container back">
            <img
              className="project-image"
              src="/assets/projects/hamster-project-3.jpg"
              alt=""
            />
          </div>
        </article>
      )}
    </>
  );
};

export default ProjectBox;
