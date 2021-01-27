import React from 'react';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
