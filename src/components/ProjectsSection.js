import React from 'react';
import { motion } from 'framer-motion';
import { 
  Section, 
  Grid, 
  ProjectCard,
  Button
} from './StyledComponents';
import styled from 'styled-components';
import ButtonWrapper from './ButtonWrapper';

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
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      tags: ['Next.js', 'TypeScript', 'Firebase', 'AI/ML', 'Tailwind'],
      link: 'https://interview-prep-green.vercel.app/',
      isHosted: true
    },
    {
      title: 'AI Medical Bot',
      description: 'Interactive medical assistant combining vision and voice capabilities to analyze medical images and respond to voice queries as a professional doctor.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      tags: ['Python', 'AI/ML', 'Voice Processing', 'Image Analysis'],
      link: 'https://github.com/kartikgopal01/AI_MEDICAL_BOT',
      isHosted: false
    },
    {
      title: 'Event Booking Platform',
      description: 'Comprehensive event management and booking platform with real-time availability, payment processing, and user management system.',
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      tags: ['React', 'Next.js', 'Payment Integration', 'UI/UX'],
      link: 'https://event-book-demo.vercel.app/',
      isHosted: true
    },
    {
      title: 'Student Data Management',
      description: 'Comprehensive system for managing student records, attendance, grades, and academic performance with secure authentication.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      tags: ['PHP', 'MySQL', 'Bootstrap', 'jQuery'],
      link: 'https://github.com/kartikgopal01/student-data-management',
      isHosted: false
    },
    {
      title: 'Charity Fund Raiser Management',
      description: 'Platform for organizing charity events, tracking donations, and managing fundraising campaigns with real-time analytics.',
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      link: 'https://github.com/kartikgopal01/charity-fund-raiser-management',
      isHosted: false
    },
    {
      title: 'Task Management Dashboard',
      description: 'Modern task management solution with drag-and-drop interface, priority-based sorting, and productivity analytics.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
      tags: ['JavaScript', 'React', 'Node.js', 'Express'],
      link: 'https://github.com/kartikgopal01/Task_Management_Dashboard',
      isHosted: false
    }
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
          <SectionTitle>Projects</SectionTitle>
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
                <ProjectCard
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
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
                </ProjectCard>
              </motion.div>
            ))}
          </Grid>
        </motion.div>
      </ProjectsContainer>
    </Section>
  );
};

export default ProjectsSection;