import React, { useState } from 'react';
import Navigation from './Navigation';
import Resume from './Resume';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

export default function PortfolioContainer() {
  const [thisPage, setThisPage] = useState('Home');
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
      {showPage()}
    </div>
  );
}
