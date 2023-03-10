import React, { useState } from 'react';
import Resume from './Resume';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Container() {
  const [thisPage, setThisPage] = useState('About');
  const showPage = () => {
    if (thisPage === 'About') {
      return <About />;
    }
    if (thisPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (thisPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };
  const tabChange = (page) => setThisPage(page);
  return (
    <div>
      <Navigation thisPage={thisPage} tabChange={tabChange} />
      <Header/>
      {showPage()}
      <Footer/>
    </div>
  );
}
