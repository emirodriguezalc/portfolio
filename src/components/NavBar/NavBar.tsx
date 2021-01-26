import React, { useEffect } from 'react';
import './NavBar.scss'

interface Props {
  title?: string,
}
export const NavBar: React.FC<Props> = () => {
  const navbar = document.querySelector('.navbar');

  useEffect(() => {
  if (navbar !== null)
    window.onscroll = () => {
        if (window.scrollY > 300) {
            navbar.classList.add('navbar-fixed');
        } else {
            navbar.classList.remove('navbar-fixed')
        }
    };
  }, [navbar]);
  
  return (
    <nav className="navbar">
      <a href="#movingBackground" className="navbar-item">
        Home
      </a>
      <a href="#about" className="navbar-item">
        About
      </a>
      <a href="#projects" className="navbar-item">
        Work
        </a>
    </nav>
  )
}

export default NavBar;
