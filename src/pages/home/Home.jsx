import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';
import HeroSection from '../../components/HeroSection';
import ProjectSection from '../../components/ProjectSection';
import SkillsSection from '../../components/SkillsSection';
import PhotographySection from '../../components/PhotographySection';
import ContactSection from '../../components/ContactSection';
import './home.css';
import './variables.css';




const Home = () => {
  return (
    <>
    <HeroSection />
    <ProjectSection />
    <SkillsSection />
    <PhotographySection />
    <ContactSection />
    </>
  );
};

export default Home;
