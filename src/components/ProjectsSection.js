import React from 'react';
import { motion } from 'framer-motion';
import { 
  Section, 
  Grid,
  ProjectCard
} from './StyledComponents';
import styled from 'styled-components';
import ButtonWrapper from './ButtonWrapper';
import AnimatedCard from './AnimatedCard';

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 0;
    width: 60px;
    height: 4px;
    background: var(--accent);
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const LiveBadge = styled.span`
  font-size: 0.7rem;
  background: var(--accent2);
  color: #fff;
  padding: 0.2rem 0.5rem;
  border-radius: 20px;
  margin-left: 0.5rem;
  vertical-align: middle;
  display: inline-block;
`;

const ProjectsSection = () => {
  const projects = [
    {
      title: 'InterviewPrep AI',
      description: 'Advanced AI-powered interview preparation platform utilizing Llama 3.3 70B for realistic technical and behavioral interviews with personalized feedback.',
      image: './images/image.png',
      tags: ['Next.js', 'TypeScript', 'Firebase','Vapi','Vercel', 'AI/ML', 'Tailwind'],
      link: 'https://interview-prep-green.vercel.app/',
      isHosted: true
    },
    {
      title: 'Cognito AI',
      description: 'Learning platform for students that integrates AI to provide personalized learning experiences and resources with voice assistance.',
      image: './images/cognito.png',
      tags: ['Next.js', 'TypeScript', 'Supabase','Vapi','Clerk','Vercel', 'AI/ML', 'Tailwind'],
      link: 'https://cognito-xo.vercel.app/',
      isHosted: true
    },
    {
      title: 'Namparty Celebrations',
      description: 'Comprehensive event management and booking platform with real-time availability, payment processing, and user management system.',
      image: './images/event.png',
      tags: ['React', 'Next.js', 'Payment Integration', 'UI/UX'],
      link: 'https://nampartycelebrations.com',
      isHosted: true
    },
    {
      title: 'AI Medical Bot',
      description: 'Interactive medical assistant combining vision and voice capabilities to analyze medical images and respond to voice queries as a professional doctor.',
      image: './images/doctor.png',
      tags: ['Python', 'AI/ML', 'Voice Processing', 'Image Analysis'],
      link: 'https://github.com/kartikgopal01/AI_MEDICAL_BOT',
      isHosted: false
    },
   
    {
      title: 'Student Data Management',
      description: 'Comprehensive system for managing student records, attendance, grades, and academic performance with secure authentication.',
      image: './images/sd.png',
      tags: ['PHP', 'MySQL', 'Bootstrap', 'jQuery'],
      link: 'https://github.com/kartikgopal01/student-data-management',
      isHosted: false
    },
    {
      title: 'Charity Fund Raiser Management',
      description: 'Platform for organizing charity events, tracking donations, and managing fundraising campaigns with real-time analytics.',
      image: './images/di.png',
      tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      link: 'https://github.com/kartikgopal01/charity-fund-raiser-management',
      isHosted: false
    },
    
  ];

  return (
    <Section id="projects">
      <ProjectsContainer>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>Major Projects</SectionTitle>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ width: '100%' }}
        >
          <Grid>
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AnimatedCard>
                  <ProjectContent>
                    <div 
                      className="project-image" 
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                    <h3>
                      {project.title}
                      {project.isHosted && <LiveBadge>LIVE</LiveBadge>}
                    </h3>
                    <p>{project.description}</p>
                    
                    <div className="tech-stack">
                      {project.tags.map((tag, tagIndex) => (
                        <span className="tech-tag" key={tagIndex}>{tag}</span>
                      ))}
                    </div>
                    
                    <div className="links">
                      <ButtonWrapper 
                        as="a" 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.isHosted ? 'View Live Project' : 'View Project'}
                      </ButtonWrapper>
                    </div>
                  </ProjectContent>
                </AnimatedCard>
              </motion.div>
            ))}
          </Grid>
        </motion.div>
      </ProjectsContainer>
    </Section>
  );
};

// New styled component for project content inside the AnimatedCard
const ProjectContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  
  .project-image {
    width: 100%;
    height: 220px;
    background-size: cover;
    background-position: center;
    border-radius: 6px;
    margin: -1.5rem -1.5rem 1.5rem -1.5rem;
    width: calc(100% + 3rem);
    position: relative;
    transition: all 0.5s ease;
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%);
      opacity: 0.6;
      transition: opacity 0.5s ease;
    }
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--accent);
      opacity: 0;
      mix-blend-mode: overlay;
      transition: opacity 0.5s ease;
      z-index: 1;
    }
  }
  
 
  
  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 600;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 40px;
      height: 2px;
      background: var(--accent);
      transition: width 0.3s ease;
    }
  }
  
  &:hover h3::after {
    width: 100%;
  }
  
  p {
    color: var(--textSecondary);
    margin-bottom: 1.5rem;
    line-height: a1.6;
  }
  
  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
  
  .tech-tag {
    font-size: 0.75rem;
    background: var(--backgroundSecondary);
    color: var(--accent);
    padding: 0.3rem 0.8rem;
    border-radius: 4px;
    transition: all 0.3s ease;
    font-weight: 500;
    letter-spacing: 0.5px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      background: var(--accent);
      color: white;
    }
  }
  
  .links {
    margin-top: auto;
    display: flex;
    gap: 1rem;
    padding-top: 1rem;
  }
`;

export default ProjectsSection;