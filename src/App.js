import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import GlobalStyles from './GlobalStyles';  
import { PageContainer } from './components/StyledComponents';
import Background from './components/Background';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';


function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <PageContainer>
        <Background />
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </PageContainer>
    </ThemeProvider>
  );
}

export default App;
