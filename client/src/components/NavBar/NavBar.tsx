import React, { useEffect } from 'react';
import './NavBar.scss';

interface Props {
  title?: string;
}

const fixNavOnScroll = () => {
  const navbar = document.querySelector('.navbar');
  if (navbar !== null) {
    if (window.pageYOffset > window.innerHeight * 0.3 - 51) {
      navbar.classList.add('navbar-fixed');
    } else {
      navbar.classList.remove('navbar-fixed');
    }
  }
  return navbar;
};

export const NavBar: React.FC<Props> = () => {
  useEffect(() => {
    window.onscroll = () => {
      fixNavOnScroll();
    };
  }, []);

  return (
    <nav className="navbar">
      <a href="#movingBackground" className="navbar-item">
        Home
      </a>
      <a href="#about" className="navbar-item">
        About
      </a>
      <a href="#skills" className="navbar-item">
        Skills
      </a>
      <a href="#projects" className="navbar-item">
        Projects
      </a>
      <a href="#contact" className="navbar-item">
        Contact
      </a>
    </nav>
  );
};

export default NavBar;
