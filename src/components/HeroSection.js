import React, { useEffect, useRef } from 'react';
import { HeroSection as StyledHeroSection, HeroTitle, HeroSubtitle, ButtonGroup } from './StyledComponents';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import ButtonWrapper from './ButtonWrapper';

// Register GSAP plugins
gsap.registerPlugin(TextPlugin);

const HeroContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const TypewriterText = styled.div`
  font-size: 1.6rem;
  color: var(--accent);
  margin-bottom: 2rem;
  font-weight: 500;
  height: 1.6em;
  font-family: 'Roboto Mono', monospace;
  
  &::before {
    content: '> ';
    opacity: 0.7;
  }
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Highlight = styled.span`
  color: var(--accent);
  position: relative;
  font-weight: 600;
`;

const HeroContent = styled(motion.div)`
  max-width: 800px;
`;

// Animation variants using Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// TypeWriter component
const TypeWriter = ({ texts }) => {
  const typewriterRef = useRef(null);
  
  useEffect(() => {
    const typewriter = typewriterRef.current;
    
    if (!typewriter) return;
    
    let currentIndex = 0;
    
    const typeNextItem = () => {
      const text = texts[currentIndex];
      
      gsap.to(typewriter, {
        duration: 0.1,
        text: "",
        ease: "none"
      });
      
      gsap.to(typewriter, {
        duration: 2,
        text: text,
        ease: "none",
        delay: 0.5,
        onComplete: () => {
          setTimeout(() => {
            currentIndex = (currentIndex + 1) % texts.length;
            typeNextItem();
          }, 2000);
        }
      });
    };
    
    typeNextItem();
    
    // Cleanup function
    return () => {
      gsap.killTweensOf(typewriter);
    };
  }, [texts]);
  
  return <TypewriterText ref={typewriterRef}></TypewriterText>;
};

const HeroSectionComponent = () => {
  const typingTexts = [
    "Building modern React applications",
    "Frontend developer with React expertise",
    "Creating responsive web experiences"
  ];

  return (
    <StyledHeroSection id="home">
      <HeroContainer>
        <HeroContent
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <TypeWriter texts={typingTexts} />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <HeroTitle>
              Hi, I'm <Highlight>Kartik Gopal</Highlight>
              <br />
              React Developer
            </HeroTitle>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <HeroSubtitle>
              I design and build modern, high-performing web applications with React
              and related technologies, focusing on clean code and exceptional user experiences.
            </HeroSubtitle>
          </motion.div>
          
          <ButtonGroup>
            <motion.div variants={itemVariants}>
              <ButtonWrapper 
                onClick={() => document.getElementById('projects').scrollIntoView()}
              >
                View Projects
              </ButtonWrapper>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <ButtonWrapper
                className="outlined contact"
                onClick={() => document.getElementById('contact').scrollIntoView()}
              >
                Contact Me
              </ButtonWrapper>
            </motion.div>
          </ButtonGroup>
        </HeroContent>
      </HeroContainer>
    </StyledHeroSection>
  );
};

export default HeroSectionComponent; 