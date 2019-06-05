import React from 'react';
import './App.css';
import Clock from './components/Clock';
import { Sidemenu } from './components/Sidemenu';
import Spot from './components/Spot';

function App() {
  return (
    <div className="app">
      <Clock />
      <main className="main">
        <div className="blaha">
          <h1 className="headline">Banor</h1>
          <h2>Padel</h2>
          <ul className="grid">
            <Spot court={1} />
            <Spot court={2} />
            <Spot court={3} />
            <Spot court={4} available={true} />
            <Spot court={5} />
            <Spot court={6} available={true} />
            <Spot court={7} available={true} />
            <Spot court={8} />
            <Spot court={9} />
            <Spot court={10} available={true} />
            <Spot court={11} />
            <Spot court={12} available={true} />
          </ul>
        </div>
      </main>
      <Sidemenu />
    </div>
  );
}

export default App;
