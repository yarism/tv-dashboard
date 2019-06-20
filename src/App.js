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
        <h1 className="headline">Välkommen!</h1>
        <ul className="grid">
          <Spot court={"Bana 1"} />
          <Spot court={"Bana 2"} joinable={true} />
          <Spot court={"Bana 4"} />
          <Spot court={"Bana 5"} nextAvailable={true} />
          <Spot court={"Bana 8"} joinable={true} />
          <Spot court={"Bana 9"}  />
          <Spot court={"Bana 10"} />
          <Spot available={true} />
        </ul>
      </main>
      <Sidemenu />
    </div>
  );
}

export default App;
