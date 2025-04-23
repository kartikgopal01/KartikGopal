import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Container components
export const PageContainer = styled.div`
  min-height: 100vh;
  background: var(--background);
  color: var(--text);
  transition: all 0.3s ease;
`;

export const Section = styled.section`
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

// Card components
export const Card = styled(motion.div)`
  background: var(--cardBackground);
  border-radius: 12px;
  padding: 2rem;
  height: 100%;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.05) 0%,
      transparent 100%
    );
    pointer-events: none;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const Button = styled(motion.button)`
  --white: #ffe7ff;
  --bg: #080808;
  --radius: 100px;
  outline: none;
  cursor: pointer;
  border: 0;
  position: relative;
  border-radius: var(--radius);
  background-color: var(--bg);
  transition: all 0.2s ease;
  box-shadow:
    inset 0 0.3rem 0.9rem rgba(255, 255, 255, 0.3),
    inset 0 -0.1rem 0.3rem rgba(0, 0, 0, 0.7),
    inset 0 -0.4rem 0.9rem rgba(255, 255, 255, 0.5),
    0 3rem 3rem rgba(0, 0, 0, 0.3),
    0 1rem 1rem -0.6rem rgba(0, 0, 0, 0.8);
  display: inline-block;
  
  &::after {
    content: "";
    position: absolute;
    top: 12%;
    left: 6%;
    right: 6%;
    bottom: 40%;
    border-radius: 22px 22px 0 0;
    box-shadow: inset 0 10px 8px -10px rgba(255, 255, 255, 0.8);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0) 100%
    );
    transition: all 0.3s ease;
  }
  
  & > span {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 16px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.7);
    padding: 16px 24px;
    position: relative;
    overflow: hidden;
    transform: translateY(2%);
    mask-image: linear-gradient(to bottom, white 40%, transparent);
    transition: all 0.2s ease;
  }
  
  & > span::before {
    content: "✧";
    margin-right: 4px;
  }
  
  &:hover > span::before {
    content: "✦";
  }
  
  &:hover {
    box-shadow:
      inset 0 0.3rem 0.5rem rgba(255, 255, 255, 0.4),
      inset 0 -0.1rem 0.3rem rgba(0, 0, 0, 0.7),
      inset 0 -0.4rem 0.9rem rgba(255, 255, 255, 0.7),
      0 3rem 3rem rgba(0, 0, 0, 0.3),
      0 1rem 1rem -0.6rem rgba(0, 0, 0, 0.8);
  }
  
  &:hover::before {
    transform: translateY(-5%);
  }
  
  &:hover::after {
    opacity: 0.4;
    transform: translateY(5%);
  }
  
  &:hover > span {
    transform: translateY(-4%);
  }
  
  &:active {
    transform: translateY(4px);
    box-shadow:
      inset 0 0.3rem 0.5rem rgba(255, 255, 255, 0.5),
      inset 0 -0.1rem 0.3rem rgba(0, 0, 0, 0.8),
      inset 0 -0.4rem 0.9rem rgba(255, 255, 255, 0.4),
      0 3rem 3rem rgba(0, 0, 0, 0.3),
      0 1rem 1rem -0.6rem rgba(0, 0, 0, 0.8);
  }
  
  /* Outlined variant */
  &.outlined {
    background: transparent;
    
    &:hover {
      background: rgba(255, 255, 255, 0.05);
    }
  }
  
  /* Contact button style */
  &.contact > span {
    color: var(--text);
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    & > span {
      font-size: 14px;
      padding: 12px 20px;
    }
  }
`;

// Navbar components
export const Nav = styled.nav`
  position: fixed;
  top: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1200px;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(10px);
  border-radius: 8px;
  padding: 1rem 2rem;
  box-shadow: var(--shadow);
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.2rem;
    top: 0;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  .nav-container {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    height: 100vh;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(var(--backgroundRGB), 1);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    z-index: 99;
    box-shadow: ${({ isOpen }) => (isOpen ? '-10px 0px 30px rgba(0, 0, 0, 0.15)' : 'none')};
    
    .nav-container {
      flex-direction: column;
      gap: 2.5rem;
      padding: 2rem;
      height: 60%;
      justify-content: center;
    }
    
    &:before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--background);
      opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
      visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
      transition: opacity 0.4s ease, visibility 0.4s ease;
      pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
      z-index: -1;
    }
  }
`;

export const NavLink = styled.a`
  color: var();
  font-weight: 500;
  position: relative;
  transition: all 0.3s ease;
  text-decoration: none;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: var(--accent);
    transition: width 0.3s ease;
  }
  
  &:hover, &.active {
    color: var(--accent);
    
    &:after {
      width: 80%;
    }
  }
  
  &.active {
    &:after {
      width: 100%;
    }
  }
  
  @media (max-width: 768px) {
    margin: 0;
    font-size: 1.4rem;
    letter-spacing: 1px;
    font-weight: 600;
    text-transform: uppercase;
    
    &:after {
      bottom: -8px;
      height: 3px;
      width: 0;
    }
    
    &.active, &:hover {
      transform: translateX(5px);
      
      &:after {
        width: 60%;
      }
    }
  }
`;

export const MenuToggle = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 6px;
  z-index: 100;
  padding: 10px;
  border-radius: 50%;
  transition: all 0.3s ease;
  aspect-ratio: 1/1;
  
  &:hover {
    background: rgba(var(--accentRGB), 0.1);
  }
  
  span {
    width: 28px;
    height: 2px;
    background: var(--text);
    border-radius: 10px;
    transition: all 0.3s ease;
    
    &:nth-child(1) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'rotate(0)'};
      width: ${({ isOpen }) => isOpen ? '28px' : '28px'};
    }
    
    &:nth-child(2) {
      opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
      transform: ${({ isOpen }) => isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }
    
    &:nth-child(3) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'rotate(0)'};
      width: ${({ isOpen }) => isOpen ? '28px' : '20px'};
    }
  }
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent);
  display: flex;
  align-items: center;
  
  span {
    color: var(--text);
    font-weight: 500;
    margin-left: 4px;
  }
`;

// Hero section components
export const HeroSection = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding-top: 4rem;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  animation: ${fadeIn} 1s ease forwards;  
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  
  span {
    color: var(--accent);
  }
`;

export const HeroSubtitle = styled.h2`
  font-size: clamp(1.2rem, 3vw, 1.6rem);
  margin-bottom: 2rem;
  color: var(--textSecondary);
  font-weight: 400;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

// Grid layouts
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// About section components
export const FlexContainer = styled.div`
  display: flex;
  gap: 4rem;
  align-items: ${props => props.align || 'center'};
  
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const AboutContent = styled.div`
  flex: 1;
`;

export const SkillIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin: 0.5rem;
  padding: 1rem;
  background: var(--cardBackground);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow);
  }
`;

// Project components
export const ProjectCard = styled(Card)`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  background: var(--cardBackground);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
  
  .project-image {
    width: 100%;
    height: 220px;
    background-size: cover;
    background-position: center;
    border-radius: 6px;
    margin: -2rem -2rem 1.5rem -2rem;
    width: calc(100% + 4rem);
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
  
  &:hover .project-image {
    transform: scale(1.05);
    
    &::before {
      opacity: 0.2;
    }
    
    &::after {
      opacity: 0.8;
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
    line-height: 1.6;
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

// Contact section components
export const Input = styled.input`
  width: 100%;
  padding: 1rem 1.2rem;
  border-radius: 8px;
  border: 1px solid rgba(var(--textRGB), 0.1);
  background: rgba(var(--backgroundSecondaryRGB), 0.5);
  color: var(--text);
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  
  &:focus {
    outline: none;
    border-color: var(--accent);
    background: rgba(var(--backgroundRGB), 0.8);
    box-shadow: 0 5px 15px rgba(var(--accentRGB), 0.1);
    transform: translateY(-2px);
  }
  
  &::placeholder {
    color: rgba(var(--textRGB), 0.4);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem 1.2rem;
  border-radius: 8px;
  border: 1px solid rgba(var(--textRGB), 0.1);
  background: rgba(var(--backgroundSecondaryRGB), 0.5);
  color: var(--text);
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  min-height: 150px;
  resize: vertical;
  line-height: 1.6;
  
  &:focus {
    outline: none;
    border-color: var(--accent);
    background: rgba(var(--backgroundRGB), 0.8);
    box-shadow: 0 5px 15px rgba(var(--accentRGB), 0.1);
    transform: translateY(-2px);
  }
  
  &::placeholder {
    color: rgba(var(--textRGB), 0.4);
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
  
  label {
    display: block;
    margin-bottom: 0.8rem;
    font-weight: 500;
    font-size: 0.95rem;
    color: var(--textSecondary);
    transition: all 0.3s ease;
  }
  
  input, textarea {
    width: 100%;
    padding: 1rem 1.2rem;
    border-radius: 8px;
    border: 1px solid rgba(var(--textRGB), 0.1);
    background: rgba(var(--backgroundSecondaryRGB), 0.5);
    color: var(--text);
    font-family: inherit;
    font-size: 1rem;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    
    &:focus {
      outline: none;
      border-color: var(--accent);
      background: rgba(var(--backgroundRGB), 0.8);
      box-shadow: 0 5px 15px rgba(var(--accentRGB), 0.1);
      transform: translateY(-2px);
    }
    
    &::placeholder {
      color: rgba(var(--textRGB), 0.4);
    }
  }
  
  textarea {
    min-height: 150px;
    resize: vertical;
    line-height: 1.6;
  }
  
  &:focus-within label {
    color: var(--accent);
    transform: translateY(-2px);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--accent);
    transition: width 0.3s ease;
  }
  
  &:focus-within::after {
    width: 100%;
  }
`;

// Footer components
export const Footer = styled.footer`
  padding: 3rem 2rem;
  background: var(--backgroundSecondary);
  border-top: var(--border);
  text-align: center;
  margin-top: 5rem;
  
  .social-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 1.5rem 0;
  }
  
  .social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--background);
    transition: all 0.3s ease;
    
    &:hover {
      background: var(--accent);
      color: white;
      transform: translateY(-5px);
    }
  }
  
  .copyright {
    color: var(--textSecondary);
    font-size: 0.9rem;
  }
`;

// SectionTitle component
export const SectionTitle = styled.h2`
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

// GlassCard component
export const GlassCard = styled(Card)`
  background: rgba(var(--cardBackgroundRGB), 0.6);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  
  &::before {
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 100%
    );
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.12);
  }
`;

// ContactForm component
export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 600px;
  margin-top: 3rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    right: -20px;
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, rgba(var(--accentRGB), 0.2) 0%, transparent 70%);
    border-radius: 50%;
    z-index: -1;
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -30px;
    left: -30px;
    width: 150px;
    height: 150px;
    background: radial-gradient(circle, rgba(var(--accent2RGB), 0.15) 0%, transparent 70%);
    border-radius: 50%;
    z-index: -1;
    pointer-events: none;
  }
`; 