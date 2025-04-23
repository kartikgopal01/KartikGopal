import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';

const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  background: var(--background);
  transition: background 0.3s ease;
`;

const Grid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(
      rgba(var(--gridColor), 0.03) 1px, 
      transparent 1px
    ),
    linear-gradient(
      90deg, 
      rgba(var(--gridColor), 0.03) 1px, 
      transparent 1px
    );
  background-size: 50px 50px;
  opacity: 0.4;
`;

const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    ellipse at top right,
    rgba(var(--accentRGB), 0.15) 0%,
    rgba(var(--accentRGB), 0) 50%
  );
  opacity: ${props => props.themeMode === 'dark' ? 0.6 : 0.3};
`;

const Gradient2 = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    ellipse at bottom left,
    rgba(var(--accent2RGB), 0.15) 0%,
    rgba(var(--accent2RGB), 0) 60%
  );
  opacity: ${props => props.themeMode === 'dark' ? 0.6 : 0.3};
`;

const Orb = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: ${props => props.themeMode === 'dark' ? 0.15 : 0.05};
  background: ${props => props.color};
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  pointer-events: none;
  transition: opacity 0.3s ease;
`;

const Dots = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(rgba(var(--dotsColor), 0.3) 1px, transparent 1px);
  background-size: 25px 25px;
  opacity: 0.1;
`;

const FloatingParticle = styled(motion.div)`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
`;

const AnimatedLines = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: 0.1;
`;

const Line = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--accent) 50%,
    transparent 100%
  );
  opacity: ${props => props.opacity};
  top: ${props => props.top}%;
`;

const Background = () => {
  const { themeMode } = useContext(ThemeContext);
  
  const orbs = [
    { x: '5%', y: '20%', size: 300, color: 'var(--accent)', animationDelay: 0 },
    { x: '85%', y: '50%', size: 350, color: 'var(--accent2)', animationDelay: 2 },
    { x: '40%', y: '80%', size: 250, color: 'var(--accent)', animationDelay: 4 }
  ];

  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    color: i % 2 === 0 ? 'var(--accent)' : 'var(--accent2)',
    duration: Math.random() * 20 + 10
  }));

  const lines = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    top: 15 + (i * 15),
    opacity: 0.1 - (i * 0.015),
    delay: i * 2
  }));

  return (
    <BackgroundWrapper>
      <Grid />
      <Dots />
      <Gradient themeMode={themeMode} />
      <Gradient2 themeMode={themeMode} />
      
      {orbs.map((orb, index) => (
        <Orb
          key={index}
          themeMode={themeMode}
          color={orb.color}
          size={orb.size}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 15,
            delay: orb.animationDelay,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
          style={{
            left: orb.x,
            top: orb.y,
          }}
        />
      ))}

      {particles.map((particle) => (
        <FloatingParticle
          key={particle.id}
          size={particle.size}
          color={particle.color}
          initial={{ 
            x: `${particle.x}%`, 
            y: `${particle.y}%`, 
            opacity: 0 
          }}
          animate={{ 
            x: `${particle.x + (Math.random() * 20 - 10)}%`,
            y: `${particle.y - 30}%`,
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            delay: Math.random() * 5
          }}
        />
      ))}

      <AnimatedLines>
        {lines.map((line) => (
          <Line
            key={line.id}
            top={line.top}
            opacity={line.opacity}
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              delay: line.delay
            }}
          />
        ))}
      </AnimatedLines>
    </BackgroundWrapper>
  );
};

export default Background; 