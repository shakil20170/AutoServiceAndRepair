import React from 'react';

// A simple utility to mimic framer-motion functionality without adding dependencies
// This is a lightweight alternative that provides similar animation capabilities

interface MotionProps {
  initial?: any;
  animate?: any;
  exit?: any;
  transition?: any;
  variants?: any;
  custom?: any;
  whileHover?: any;
  whileTap?: any;
  whileInView?: any;
  viewport?: any;
  className?: string;
}

export function motion<T extends React.ElementType>(Component: T) {
  return React.forwardRef<any, React.ComponentPropsWithoutRef<T> & MotionProps>((props, ref) => {
    const { 
      initial, 
      animate, 
      exit, 
      transition, 
      variants,
      custom,
      whileHover,
      whileTap,
      whileInView,
      viewport,
      className = '',
      ...rest 
    } = props;

    // In a real implementation, we would apply animations here
    // For now, we'll just pass through the props
    
    return React.createElement(Component, { ...rest, ref, className });
  });
}

// This is just to make TypeScript happy - in a real implementation,
// motion would properly type all HTML elements
motion.div = motion('div');
motion.section = motion('section');
motion.article = motion('article');
motion.span = motion('span');
motion.img = motion('img');

export default { motion };