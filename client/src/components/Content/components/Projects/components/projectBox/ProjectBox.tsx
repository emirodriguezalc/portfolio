import React, { useState } from 'react';
import './ProjectBox.scss';

interface Props {}

export const ProjectBox: React.FC<Props> = () => {
  const [cardState, useCardState] = useState(false);

  return (
    <>
      {cardState === false ? (
        <article className="ProjectBox front">
          <img
            role="presentation"
            onClick={() => useCardState(!cardState)}
            className="project-image"
            src="/assets/projects/hamster-project-2.jpg"
            alt=""
          />
        </article>
      ) : (
        <article className="ProjectBox back">
          <img
            role="presentation"
            onClick={() => useCardState(!cardState)}
            className="project-image"
            src="/assets/projects/hamster-project-3.jpg"
            alt=""
          />
        </article>
      )}
    </>
  );
};

export default ProjectBox;
