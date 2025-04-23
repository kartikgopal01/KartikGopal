import React from 'react';
import { Button } from './StyledComponents';
import { motion } from 'framer-motion';

/**
 * A wrapper component for the new pearl button styling
 * This makes it backward compatible with existing button usages
 */
const ButtonWrapper = ({ 
  children, 
  onClick, 
  type = "button", 
  className = "", 
  whileHover,
  whileTap,
  as,
  href,
  target,
  rel,
  ...props 
}) => {
  return (
    <Button 
      as={as || motion.button}
      onClick={onClick} 
      type={type} 
      className={className}
      whileHover={whileHover || { scale: 1.02 }}
      whileTap={whileTap || { scale: 0.98 }}
      href={href}
      target={target}
      rel={rel}
      {...props}
    >
      <span>{children}</span>
    </Button>
  );
}

export default ButtonWrapper; 