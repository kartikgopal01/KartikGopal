import React from 'react';
import { motion } from 'framer-motion';
import { 
  Section, 
  Card,
  FormGroup,
  Button,
  Input,
  TextArea,
  GlassCard
} from './StyledComponents';
import styled from 'styled-components';
import ButtonWrapper from './ButtonWrapper';
import AnimatedCard from './AnimatedCard';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  width: 100%;
  
  & > div {
    width: 250px;
    height: 180px;
  }
  
  @media (max-width: 768px) {
    gap: 2rem;
    
    & > div {
      width: 100%;
      max-width: 300px;
      height: 160px;
    }
  }
`;

const ContactCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  
  svg {
    width: 40px;
    height: 40px;
    color: var(--accent);
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: var(--accent2);
  }
  
  p {
    font-size: 1rem;
  }
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 600px;
  margin-top: 3rem;
`;

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Form submitted! (This is just a demo)');
  };

  const contactInfo = [
    {
      title: 'Email',
      info: 'kartikgopal01@gmail.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'GitHub',
      info: 'kartikgopal01',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      )
    },
    {
      title: 'Location',
      info: 'Sirsi ,Karnataka ,India ',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    <Section id="contact">
      <ContactContainer>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>Contact Me</SectionTitle>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p style={{ maxWidth: '700px', margin: '0 auto 3rem auto' }}>
            Interested in AI-powered solutions or web applications? Let's discuss how we can work together on your next project!
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <ContactInfo>
            {contactInfo.map((item, index) => (
              <AnimatedCard key={index}>
                <ContactCardContent>
                  {item.icon}
                  <h3>{item.title}</h3>
                  <p>{item.info}</p>
                </ContactCardContent>
              </AnimatedCard>
            ))}
          </ContactInfo>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <label htmlFor="name">Name</label>
              <Input type="text" id="name" placeholder="Your Name" required />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="email">Email</label>
              <Input type="email" id="email" placeholder="Your Email" required />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="subject">Subject</label>
              <Input type="text" id="subject" placeholder="Subject" />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="message">Message</label>
              <TextArea id="message" placeholder="Your Message" required rows="6"></TextArea>
            </FormGroup>
            
            <ButtonWrapper 
              type="submit"
            >
              Send Message
            </ButtonWrapper>
          </Form>
        </motion.div>
      </ContactContainer>
    </Section>
  );
};

export default ContactSection; 