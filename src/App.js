import React, { useEffect, useState, useContext } from 'react';
import './App.css';
import PeriodContainer from './components/PeriodContainer';
import GradeView from './components/grade_view/GradeView';
import { DataContext } from './dataContext';

// import PopupInput from './components/buttons/PopupInput';

function App() {
  const [scroll, setScroll] = useState(false);
  const { activeElement } = useContext(DataContext);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });

    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });

    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY > 60);
      });
      document.removeEventListener('contextmenu', (e) => {e.preventDefault();});
    };
  }, []);

  


  return (
    <div id="app-base" className={activeElement ? "prevent-scroll" : ""}>
      <header id="home-header" className={scroll ? "small-header" : ""}>
        <div id="logo-container">
          <h1>UpGrade</h1>
          <h2>your grade calculator</h2>
        </div>

      </header>
      <PeriodContainer />
      <GradeView />

      {/* <PopupInput /> */}
    </div>
  );
}

export default App;
