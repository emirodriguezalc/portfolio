import React, { useEffect } from 'react';
import './NavBar.scss';

interface Props {
  title?: string;
}
export const NavBar: React.FC<Props> = () => {
  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    window.onscroll = () => {
      if (navbar !== null) {
        if (window.pageYOffset > window.innerHeight * 0.3 - 1) {
          navbar.classList.add('navbar-fixed');
        } else {
          navbar.classList.remove('navbar-fixed');
        }
        return navbar;
      }
      return navbar;
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
