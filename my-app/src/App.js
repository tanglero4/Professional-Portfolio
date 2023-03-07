import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';
import 'bulma/css/bulma.min.css';
import Footer from './Components/Footer';
import Hero from './Components/hero';
import Container from './Components/Container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navigation />
      <Container />
      <Hero />
      <Footer />
      </header>

    </div>
  );
}

export default App;
