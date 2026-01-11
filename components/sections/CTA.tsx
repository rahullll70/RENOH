'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
// Import your custom hook
import { useTime } from '@/hooks/useTime'; 

/**
 * Defining the animation variants with a strict type 
 * to fix the TypeScript spread error shown in your image.
 */
const reveal: Variants = {
  initial: { y: 40, opacity: 0 },
  whileInView: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
  }
};

const CTA = () => {
  // Using the custom hook from your 3rd image
  const time = useTime();

  return (
    <section className='px-6 md:px-12 py-32 bg-white text-black border-t border-black/10'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 items-end border-b border-black/10 pb-20'>
          
          {/* Left Column: Availability & Time */}
          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={reveal}
            className='space-y-12'
          >
            <div>
              <h3 className='font-mono text-[10px] uppercase tracking-[0.3em] text-black/40 mb-6'>
                / Availability
              </h3>
              <div className='flex items-center gap-3'>
                <div className='w-2 h-2 rounded-full bg-green-500 animate-pulse' />
                <span className='text-2xl font-bold uppercase tracking-tighter'>
                  Taking Projects — Q1 2026
                </span>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-8'>
              <div>
                <h4 className='font-mono text-[10px] uppercase text-black/40 mb-2'>
                  Local Time
                </h4>
                <p className='text-xl font-bold uppercase tracking-tighter'>
                  {time}
                </p>
              </div>
              <div>
                <h4 className='font-mono text-[10px] uppercase text-black/40 mb-2'>
                  Response Time
                </h4>
                <p className='text-xl font-bold uppercase tracking-tighter'>
                  &lt; 24 Hours
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: CTA Button */}
          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={reveal}
            className='flex flex-col items-start lg:items-end'
          >
            <p className='font-mono text-[10px] uppercase tracking-[0.5em] mb-8 text-black/40'>
              Ready to evolve?
            </p>
            <motion.a
              href='mailto:hello@renoh.agency'
              whileHover={{ scale: 1.05 }}
              className='group relative inline-flex items-center justify-center bg-black text-white px-10 py-6 rounded-full overflow-hidden'
            >
              <span className='relative z-10 text-xl font-bold uppercase tracking-widest group-hover:pr-10 transition-all duration-500'>
                Start Project
              </span>
              <ArrowUpRight className='absolute right-10 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10' />
              <motion.div
                className='absolute inset-0 bg-zinc-800'
                initial={{ y: '100%' }}
                whileHover={{ y: 0 }}
              />
            </motion.a>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default CTA;