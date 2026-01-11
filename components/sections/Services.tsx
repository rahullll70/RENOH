'use client';

import { motion } from 'framer-motion';

const services = ['Web Development', 'Graphic Design', 'UI/UX Architecture'];

const Services = () => {
  return (
    <section className='px-6 md:px-12 py-32 bg-black border-y border-zinc-900'>
      {services.map((s, i) => (
        <motion.div
          key={i}
          initial='initial'
          whileHover='hover'
          /* 'group' allows children to react when this parent is hovered */
          className='group relative flex justify-between items-center py-16 border-b border-zinc-900 overflow-hidden px-4 cursor-pointer'
        >
          {/* Animated Background */}
          <motion.div
            variants={{ initial: { x: '-100%' }, hover: { x: 0 } }}
            transition={{ duration: 0.5, ease: 'circOut' }}
            className='absolute inset-0 bg-white z-0'
          />

          <div className='relative z-10 flex items-baseline gap-6'>
            {/* Transition index color */}
            <span className='font-mono text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors duration-300'>
              0{i + 1}
            </span>
            
            {/* Transition title color to black */}
            <h2 className='text-5xl md:text-8xl font-black uppercase tracking-tighter text-white group-hover:text-black transition-colors duration-500'>
              {s}
            </h2>
          </div>

          {/* Optional: Add the "View" tag like in your original design */}
          <div className='relative z-10 hidden md:block font-mono text-[10px] text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 uppercase tracking-widest'>
            [ View Capabilities ]
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Services;