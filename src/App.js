import React, { useEffect, useState } from 'react';
import './App.css';
import PeriodContainer from './components/PeriodContainer';

function App() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 60);
    });
  }, []);


  return (
    <div id="app-base">
      <header id="home-header" className={scroll ? "small-header" : ""}>
        <div id="logo-container">
          <h1>UpGrade</h1>
          <h2>your grade calculator</h2>
        </div>

      </header>
      <PeriodContainer />
    </div>
  );
}

export default App;
