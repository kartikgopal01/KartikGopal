import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Section, SectionTitle } from './StyledComponents';

// Define SectionSubtitle locally since it's not available in StyledComponents
const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  margin-bottom: 3rem;
  max-width: 600px;
  opacity: 0.8;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

// Styled components for the Work Section
const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-top: 2rem;
`;

const Roadmap = styled.div`
  position: relative;
  padding-left: 2rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 3px;
    height: 100%;
    background: linear-gradient(to bottom, var(--accent) 0%, rgba(var(--accentRGB), 0.2) 100%);
    border-radius: 3px;
  }
  
  @media (max-width: 768px) {
    padding-left: 1.5rem;
  }
`;

const TimelineNode = styled(motion.div)`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--accent);
  left: -2.85rem;
  top: 0.5rem;
  box-shadow: 0 0 15px rgba(var(--accentRGB), 0.7);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 12px;
  
  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
    left: -2.3rem;
    font-size: 10px;
  }
`;

const WorkItem = styled(motion.div)`
  position: relative;
  margin-bottom: 5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 4rem;
  }
`;

const WorkCard = styled(motion.div)`
  background: var(--cardBackground);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: var(--shadow);
  border: 1px solid rgba(255, 255, 255, 0.05);
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 6px;
    background: var(--accent);
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }
`;

const WorkTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: var(--text);
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const WorkDate = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  background: rgba(var(--accentRGB), 0.1);
  color: var(--accent);
  padding: 0.3rem 0.8rem;
  border-radius: 30px;
  display: inline-block;
  margin-bottom: 1rem;
`;

const WorkDescription = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const WorkTechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const TechTag = styled(motion.span)`
  background: rgba(var(--accentRGB), 0.1);
  color: var(--text);
  padding: 0.3rem 0.8rem;
  border-radius: 30px;
  font-size: 0.85rem;
  font-weight: 500;
`;

const WorkLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--accent);
  font-weight: 500;
  text-decoration: none;
  margin-right: 1.5rem;
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.6
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
  hover: { 
    y: -10,
    boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  }
};

const nodeVariants = {
  hidden: { scale: 0 },
  visible: { 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
      delay: 0.2
    }
  }
};

const techTagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10
    }
  },
  hover: { 
    scale: 1.05,
    backgroundColor: "rgba(var(--accentRGB), 0.2)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  }
};

const linkVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  hover: { 
    y: -5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  }
};

const WorkSection = () => {
  const [hoveredTag, setHoveredTag] = useState(null);
  
  return (
    <Section id="work">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionTitle>My Work</SectionTitle>
        <SectionSubtitle>Projects I've worked on throughout my journey</SectionSubtitle>
      </motion.div>
      
      <WorkContainer>
        <Roadmap as={motion.div} 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <WorkItem variants={itemVariants}>
            <TimelineNode variants={nodeVariants}>1</TimelineNode>
            <WorkCard
              variants={cardVariants}
              whileHover="hover"
            >
              <WorkTitle>Habba Events</WorkTitle>
              <WorkDate>2025 - Present</WorkDate>
              <WorkDescription>
                Developed a comprehensive event management platform for Habba Events, enabling
                seamless organization, promotion, and ticketing for cultural and corporate events.
                The platform includes features like event discovery, online ticket booking, QR-based
                check-ins, and detailed analytics for event organizers.
              </WorkDescription>
              <WorkTechStack>
                {['React', 'Node.js', 'MongoDB', 'Express', 'AWS', 'Payment Integration'].map((tech, index) => (
                  <TechTag 
                    key={index}
                    variants={techTagVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    transition={{ delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredTag(tech)}
                    onMouseLeave={() => setHoveredTag(null)}
                    style={{ 
                      backgroundColor: hoveredTag === tech ? 'rgba(var(--accentRGB), 0.2)' : 'rgba(var(--accentRGB), 0.1)',
                    }}
                  >
                    {tech}
                  </TechTag>
                ))}
              </WorkTechStack>
              <div style={{ marginTop: "1.5rem" }}>
                <WorkLink 
                  href="https://habbaevents.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Visit Website
                </WorkLink>
              </div>
            </WorkCard>
          </WorkItem>
          
          <WorkItem variants={itemVariants}>
            <TimelineNode variants={nodeVariants}>2</TimelineNode>
            <WorkCard
              variants={cardVariants}
              whileHover="hover"
            >
              <WorkTitle>NAM Party Celebrations</WorkTitle>
              <WorkDate>2025 - Present</WorkDate>
              <WorkDescription>
                Designed and developed a party planning and events website for NAM Party Celebrations,
                focusing on creating an engaging user experience that showcases their services and
                portfolio. Implemented a custom booking system that allows customers to select themes,
                services, and manage their party planning process online.
              </WorkDescription>
              <WorkTechStack>
                {['React', 'Redux', 'Firebase', 'Styled Components', 'Framer Motion', 'Responsive Design'].map((tech, index) => (
                  <TechTag 
                    key={index}
                    variants={techTagVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    transition={{ delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredTag(tech)}
                    onMouseLeave={() => setHoveredTag(null)}
                    style={{ 
                      backgroundColor: hoveredTag === tech ? 'rgba(var(--accentRGB), 0.2)' : 'rgba(var(--accentRGB), 0.1)',
                    }}
                  >
                    {tech}
                  </TechTag>
                ))}
              </WorkTechStack>
              <div style={{ marginTop: "1.5rem" }}>
                <WorkLink 
                  href="https://nampartycelebrations.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Visit Website
                </WorkLink>
              </div>
            </WorkCard>
          </WorkItem>
        </Roadmap>
      </WorkContainer>
    </Section>
  );
};

export default WorkSection; 