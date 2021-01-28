import React, { useState } from 'react';
import './ProjectBox.scss';

interface Props {}

export const ProjectBox: React.FC<Props> = () => {
  const [cardState, setCardState] = useState(true);
  const [flipState, setFlipState] = useState(false);

  const flipCard = (state: boolean) => {
    const innerContainer = document.querySelector('.ProjectBox__inner-container');
    if (innerContainer) {
      innerContainer.classList.add('flip');
      setFlipState(!flipState);
      setTimeout(() => {
        innerContainer.classList.remove('flip');
        setCardState(state);
      }, 200);
    }
  };

  const handlePointerEnter = (e: any) => {
    e.preventDefault();
    flipCard(true);
  };

  const handlePointerOut = (e: any) => {
    e.preventDefault();
    flipCard(false);
  };

  return (
    <>
      {cardState === false ? (
        <article
          className="ProjectBox"
          role="presentation"
          onPointerEnter={(e) => handlePointerEnter(e)}
          onPointerOut={(e) => handlePointerOut(e)}
        >
          <div className="ProjectBox__inner-container front">
            <img
              className="project-image"
              src="/assets/projects/hamster-project-2.jpg"
              alt=""
            />
          </div>
        </article>
      ) : (
        <article
          className="ProjectBox"
          role="presentation"
          onPointerEnter={(e) => handlePointerEnter(e)}
          onPointerOut={(e) => handlePointerOut(e)}
        >
          <div className="ProjectBox__inner-container back">
            <img
              className="project-image--small"
              src="/assets/projects/hamster-project-2.jpg"
              alt=""
            />
            <button type="button">SHOW PREVIEW</button>
            <button type="button">LINK TO SOURCE CODE</button>
          </div>
        </article>
      )}
    </>
  );
};

export default ProjectBox;
