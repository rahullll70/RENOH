'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      setIsHovering(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <motion.div
      className='fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block rounded-full bg-white mix-blend-difference'
      animate={{
        x: mousePos.x,
        y: mousePos.y,

        translateX: isHovering ? -30 : -10,
        translateY: isHovering ? -30 : -10,
        width: isHovering ? 60 : 20,
        height: isHovering ? 60 : 20,
      }}
      transition={{
        type: 'spring',
        stiffness: 250,
        damping: 25,
        mass: 0.5,
      }}
    />
  );
};

export default Cursor;
