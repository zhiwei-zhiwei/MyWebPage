import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import EducationSection from './components/EducationSection';
import EduImg from './components/EduImg';
import SkillsSection from './components/SkillsSection';
import LogoBar from './components/LogoBar';
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
      <EduImg />
      <SkillsSection />
      <LogoBar />
      <JobSection />
      {/* <ContactSection /> */}
      <Footer />
    </div>
  );
}

export default App;
