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
          <Spot court={"Engströms bil"} />
          <Spot court={"XL Bygg"} joinable={true} />
          <Spot court={"Harrys"} />
          <Spot court={"Morups fönster"} nextAvailable={true} />
          <Spot court={"Skandiamäklarna"} joinable={true} />
          <Spot court={"Gatorade"}  />
          <Spot court={"BC Bygg"} />
          <Spot available={true} />
        </ul>
      </main>
      <Sidemenu />
    </div>
  );
}

export default App;
