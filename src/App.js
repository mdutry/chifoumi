import { useState } from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import Accueil from './components/Accueil';
import GamePage from './components/GamePage';

function App() {
  const appSwitch = (
    <Routes>
      <Route exact path="/" element={<Accueil />} />
      <Route exact path="/game/:id" fixed element={<GamePage />} />
    </Routes>
  );

  return (
    <div className="App bgGrey">
      {appSwitch}
    </div>
  );
}

export default App;
