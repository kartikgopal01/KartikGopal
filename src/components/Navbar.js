import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { Nav, NavLinks, NavLink, MenuToggle, Logo } from './StyledComponents';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const CloseButton = styled.button`
  position: absolute;
  top: 17px;
  right: 23px;
  background: none;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--text);
  transition: all 0.3s ease;
  z-index: 10;
  
  &:hover {
    background: var(--accent);
    color: white;
    transform: rotate(90deg);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
  
  @media (min-width: 769px) {
    display: none;
  }
`;

// Animation variants
const navVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const navItemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 15
    }
  }
};

const NavItem = ({ href, onClick, children, isActive }) => {
  const handleClick = (e) => {
    e.preventDefault();
    
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Close mobile menu if open
      onClick();
      
      // Smooth scroll to the element
      window.scrollTo({
        top: targetElement.offsetTop - 100, // Offset for navbar height
        behavior: 'smooth'
      });
      
      // Update URL hash without scrolling
      window.history.pushState(null, null, href);
    }
  };
  
  return (
    <motion.div variants={navItemVariants}>
      <NavLink href={href} onClick={handleClick} className={isActive ? 'active' : ''}>
        {children}
      </NavLink>
    </motion.div>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { themeMode, toggleTheme } = useContext(ThemeContext);
  const [activeLink, setActiveLink] = useState("home");
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const closeMenu = () => {
    setMenuOpen(false);
  };
  
  // Update active link based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "work", "projects", "contact"];
      const scrollPosition = window.scrollY + 200; // Reduced offset for better detection
      
      // Find all section elements
      const sectionElements = sections.map(id => ({
        id,
        element: document.getElementById(id)
      })).filter(item => item.element !== null);
      
      // Sort by position on page to handle overlaps correctly
      sectionElements.sort((a, b) => {
        return a.element.offsetTop - b.element.offsetTop;
      });
      
      // Find the current active section
      let currentSection = sectionElements[0]?.id || "home";
      
      for (const { id, element } of sectionElements) {
        const offsetTop = element.offsetTop - 100; // Offset for navbar height
        const offsetBottom = offsetTop + element.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          currentSection = id;
          break;
        }
      }
      
      // Only update if changed to avoid unnecessary rerenders
      if (currentSection !== activeLink) {
        setActiveLink(currentSection);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    // Initial call to set the correct active link on load
    setTimeout(handleScroll, 100);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeLink]);
  
  // Manually handle clicks for more immediate feedback
  const handleNavClick = (id) => {
    closeMenu();
    setActiveLink(id.substring(1)); // Remove the # from the id
  };
  
  return (
    <Nav>
      <Logo>
        KARTIK<span>GOPAL</span>
      </Logo>
      
      <MenuToggle isOpen={menuOpen} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </MenuToggle>
      
      <NavLinks isOpen={menuOpen}>
        <CloseButton onClick={closeMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </CloseButton>
        
        <motion.div
          variants={navVariants}
          initial="hidden"
          animate="visible"
          style={{ display: "flex", gap: "2rem", alignItems: "center" }}
          className="nav-container"
        >
          <NavItem href="#home" onClick={() => handleNavClick("#home")} isActive={activeLink === 'home'}>Home</NavItem>
          <NavItem href="#about" onClick={() => handleNavClick("#about")} isActive={activeLink === 'about'}>About</NavItem>
          <NavItem href="#work" onClick={() => handleNavClick("#work")} isActive={activeLink === 'work'}>My Work</NavItem>
          <NavItem href="#projects" onClick={() => handleNavClick("#projects")} isActive={activeLink === 'projects'}>Projects</NavItem>
          <NavItem href="#contact" onClick={() => handleNavClick("#contact")} isActive={activeLink === 'contact'}>Contact</NavItem>
          <motion.div variants={navItemVariants}>
            <ThemeToggle />
          </motion.div>
        </motion.div>
      </NavLinks>
    </Nav>
  );
};

export default Navbar; 