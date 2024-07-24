import React from 'react';
// import PortfolioForm from './components/PortfolioForm/PortfolioForm';
import Hero from './components/Hero/Hero';
import './index.css';
import '@fontsource/space-grotesk';
import '@fontsource/space-grotesk/700.css';
import '@fontsource/space-grotesk';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import JobExp from './components/JobExp/Projects';

function App() {
  return (
    <div>
      <Hero />
      <Experience />
      {/* <JobExp/> */}
      <Projects />   
       <JobExp/>

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
