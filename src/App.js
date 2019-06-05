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
            <Spot />
            <Spot />
            <Spot />
            <Spot available={true} />
            <Spot />
            <Spot available={true} />
            <Spot available={true} />
            <Spot />
            <Spot />
            <Spot available={true} />
            <Spot />
            <Spot available={true} />
          </ul>
        </div>
      </main>
      <Sidemenu />
    </div>
  );
}

export default App;
