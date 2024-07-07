import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import JobSection from './components/JobSection';
// import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <EducationSection />
      <SkillsSection />
      <JobSection />
      {/* <ContactSection /> */}
      <Footer />
    </div>
  );
}

export default App;
