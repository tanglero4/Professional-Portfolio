import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Components/navigation';
import 'bulma/css/bulma.min.css';
import Footer from './Components/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navigation />
      <Footer />
      </header>

    </div>
  );
}

export default App;
