import React from 'react';
import './App.css';
import './index.css';
import Header from './Header';
import Footer from './footer';
import RateFetcher from './RateFetcher';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <RateFetcher />
      </main>
      <Footer />
    </div>
  );
}

export default App;
