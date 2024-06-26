// src/App.js
import React from 'react';
import './App.css';
import RateFetcher from './RateFetcher';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Shipping Rates Tool</h1>
      </header>
      <main>
        <RateFetcher />
      </main>
    </div>
  );
}

export default App;
