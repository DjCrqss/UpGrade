import React from 'react';
import './App.css';
import PeriodContainer from './components/PeriodContainer';

function App() {

  return (
    <div id="app-base">
      <header id="home-header">
        <h1>UpGrade</h1>
        <h2>your grade calculator</h2>
      </header>
       <PeriodContainer />
    </div>
  );
}

export default App;
