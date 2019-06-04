import React from 'react';

import Clock from './components/Clock';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="main">
        <div className="blaha">
          <h1 className="headline">Banor</h1>
          <h2>Padel</h2>
          <ul className="grid">
            <li className="grid__card">
              <h3 className="card__headline">Bana 1 - 13:00 - 14:00</h3>
              <div className="player__container">
                <div className="player__first">
                  <span>5.3 D. Crantz</span>
                  <span>5.9 H. Törminen</span>
                </div>
                <div className="player__second">
                  <span>4.7 R. Bocchi</span>
                  <span>5.4 J. Persson</span>
                </div>
              </div>
            </li>
            <li className="grid__card">
              <h3 className="card__headline">Bana 2 - 13:00 - 14:00</h3>
              <div className="player__container">
                <div className="player__first">
                  <span>5.3 D. Crantz</span>
                  <span>5.9 H. Törminen</span>
                </div>
                <div className="player__second">
                  <span>4.7 R. Bocchi</span>
                  <span>5.4 J. Persson</span>
                </div>
              </div>
            </li>
            <li className="grid__card">
              <h3 className="card__headline">Bana 3 - 13:00 - 14:00</h3>
              <div className="player__container">
                <div className="player__first">
                  <span>5.3 D. Crantz</span>
                  <span>5.9 H. Törminen</span>
                </div>
                <div className="player__second">
                  <span>4.7 R. Bocchi</span>
                  <span>5.4 J. Persson</span>
                </div>
              </div>
            </li>
            <li className="grid__card">
              <h3 className="card__headline">Bana 4 - 13:00 - 14:00</h3>
              <div className="player__container">
                <div className="player__first">
                  <span>5.3 D. Crantz</span>
                  <span>5.9 H. Törminen</span>
                </div>
                <div className="player__second">
                  <span>4.7 R. Bocchi</span>
                  <span>5.4 J. Persson</span>
                </div>
              </div>
            </li>
            <li className="grid__card">
              <h3 className="card__headline">Bana 5 - 13:00 - 14:00</h3>
              <div className="player__container">
                <div className="player__first">
                  <span>5.3 D. Crantz</span>
                  <span>5.9 H. Törminen</span>
                </div>
                <div className="player__second">
                  <span>4.7 R. Bocchi</span>
                  <span>5.4 J. Persson</span>
                </div>
              </div>
            </li>
            <li className="grid__card">
              <h3 className="card__headline card__headline--available">Bana 6 - 13:00 - 14:00</h3>
              <div className="player__container">
                <div>Boka via MATCHi</div>
              </div>
            </li>
            <li className="grid__card">
              <h3 className="card__headline">Bana 7 - 13:00 - 14:00</h3>
              <div className="player__container">
                <div className="player__first">
                  <span>5.3 D. Crantz</span>
                  <span>5.9 H. Törminen</span>
                </div>
                <div className="player__second">
                  <span>4.7 R. Bocchi</span>
                  <span>5.4 J. Persson</span>
                </div>
              </div>
            </li>
            <li className="grid__card">
              <h3 className="card__headline">Bana 8 - 13:00 - 14:00</h3>
              <div className="player__container">
                <div className="player__first">
                  <span>5.3 D. Crantz</span>
                  <span>5.9 H. Törminen</span>
                </div>
                <div className="player__second">
                  <span>4.7 R. Bocchi</span>
                  <span>5.4 J. Persson</span>
                </div>
              </div>
            </li>
            <li className="grid__card">
              <h3 className="card__headline card__headline--available">Bana 9 - 13:00 - 14:00</h3>
              <div className="player__container">
                <div>Boka via MATCHi</div>
              </div>
            </li>
            <li className="grid__card">
              <h3 className="card__headline">Bana 10 - 13:00 - 14:00</h3>
              <div className="player__container">
                <div className="player__first">
                  <span>5.3 D. Crantz</span>
                  <span>5.9 H. Törminen</span>
                </div>
                <div className="player__second">
                  <span>4.7 R. Bocchi</span>
                  <span>5.4 J. Persson</span>
                </div>
              </div>
            </li>
            <li className="grid__card">
              <h3 className="card__headline card__headline--available">Bana 11 - 13:00 - 14:00</h3>
              <div className="player__container">
                <div>Boka via MATCHi</div>
              </div>
            </li>
            <li className="grid__card">
              <h3 className="card__headline card__headline--available">Bana 12 - 13:00 - 14:00</h3>
              <div className="player__container">
                <div>Boka via MATCHi</div>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <ul className="aside">
        <li className="grid__card">
          <h3>Aktiviteter</h3>
          <ul>
            <li>29/6 - Lär dig tennis</li>
            <li>2/7 - Hur yoga förbättrar din smash</li>
            <li>4/7 - Gruppträning med Leffe</li>
            <li>12/7 - Minitunering i padel</li>
            <li>14/7 - Gruppstretch</li>
          </ul>
        </li>
        <li className="grid__card">
          <h3>Nyheter</h3>
        </li>
        <li className="grid__card">
          <h3>sadf</h3>
        </li>
        <li className="grid__card">
          <h3>sadf</h3>
        </li>
      </ul>
      <footer>
        <Clock />
      </footer>
    </div>
  );
}

export default App;
