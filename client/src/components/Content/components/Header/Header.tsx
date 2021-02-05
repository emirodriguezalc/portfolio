import React from 'react';
import './Header.scss';

interface Props {
  title?: string;
}

const Header: React.FC<Props> = () => {
  return (
    <section className="Header" id="header">
      <h1 className="header-title">Emilia Rodriguez Gimenez</h1>
      <h2 className="header-subtitle">Full stack developer</h2>
    </section>
  );
};

export default Header;
