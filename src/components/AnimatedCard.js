import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AnimatedCard = ({ children, className }) => {
  return (
    <StyledCardWrapper className={className}>
      <div className="card-container">
        <div className="glow" />
        <div className="darkBorderBg" />
        <div className="darkBorderBg" />
        <div className="darkBorderBg" />
        <div className="white" />
        <div className="border" />
        <div className="card-content">
          {children}
        </div>
      </div>
    </StyledCardWrapper>
  );
};

const StyledCardWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  
  .card-container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    overflow: visible;
  }
  
  .white,
  .border,
  .darkBorderBg,
  .glow {
    height: 100%;
    width: 100%;
    position: absolute;
    overflow: hidden;
    z-index: -1;
    border-radius: 12px;
    filter: blur(3px);
  }
  
  .card-content {
    background-color: var(--cardBackground);
    border: none;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    color: var(--text);
    padding: 1.5rem;
    z-index: 2;
    position: relative;
  }

  .white {
    border-radius: 10px;
    filter: blur(2px);
  }

  .white::before {
    content: "";
    z-index: -2;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(83deg);
    position: absolute;
    width: 600px;
    height: 600px;
    background-repeat: no-repeat;
    background-position: 0 0;
    filter: brightness(1.4);
    background-image: conic-gradient(
      rgba(0, 0, 0, 0) 0%,
      #a099d8,
      rgba(0, 0, 0, 0) 8%,
      rgba(0, 0, 0, 0) 50%,
      #dfa2da,
      rgba(0, 0, 0, 0) 58%
    );
    transition: all 2s;
  }
  
  .border {
    border-radius: 11px;
    filter: blur(0.5px);
  }
  
  .border::before {
    content: "";
    z-index: -2;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(70deg);
    position: absolute;
    width: 600px;
    height: 600px;
    filter: brightness(1.3);
    background-repeat: no-repeat;
    background-position: 0 0;
    background-image: conic-gradient(
      #1c191c,
      var(--accent) 5%,
      #1c191c 14%,
      #1c191c 50%,
      var(--accent2) 60%,
      #1c191c 64%
    );
    transition: all 2s;
  }
  
  .darkBorderBg {
    border-radius: 12px;
  }
  
  .darkBorderBg::before {
    content: "";
    z-index: -2;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(82deg);
    position: absolute;
    width: 600px;
    height: 600px;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-image: conic-gradient(
      rgba(0, 0, 0, 0),
      var(--accent) 5%,
      rgba(0, 0, 0, 0) 10%,
      rgba(0, 0, 0, 0) 50%,
      var(--accent2) 55%,
      rgba(0, 0, 0, 0) 60%
    );
    transition: all 2s;
  }
  
  .glow {
    overflow: hidden;
    filter: blur(30px);
    opacity: 0.4;
    border-radius: 12px;
  }
  
  .glow:before {
    content: "";
    z-index: -2;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(60deg);
    position: absolute;
    width: 800px;
    height: 800px;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-image: conic-gradient(
      #000,
      var(--accent) 5%,
      #000 38%,
      #000 50%,
      var(--accent2) 60%,
      #000 87%
    );
    transition: all 2s;
  }

  /* Hover animations */
  .card-container:hover > .darkBorderBg::before {
    transform: translate(-50%, -50%) rotate(-98deg);
  }
  
  .card-container:hover > .glow::before {
    transform: translate(-50%, -50%) rotate(-120deg);
  }
  
  .card-container:hover > .white::before {
    transform: translate(-50%, -50%) rotate(-97deg);
  }
  
  .card-container:hover > .border::before {
    transform: translate(-50%, -50%) rotate(-110deg);
  }
  
  /* Active animations */
  .card-container:active > .darkBorderBg::before {
    transform: translate(-50%, -50%) rotate(442deg);
    transition: all 4s;
  }
  
  .card-container:active > .glow::before {
    transform: translate(-50%, -50%) rotate(420deg);
    transition: all 4s;
  }
  
  .card-container:active > .white::before {
    transform: translate(-50%, -50%) rotate(443deg);
    transition: all 4s;
  }
  
  .card-container:active > .border::before {
    transform: translate(-50%, -50%) rotate(430deg);
    transition: all 4s;
  }
`;

export default AnimatedCard; 