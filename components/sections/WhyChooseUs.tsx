'use client';

import React from 'react';
import { Zap, Shield, Target, TrendingUp, Cpu, Activity } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const reasons = [
  {
    icon: <Zap size={22} />,
    title: 'Performance First',
    desc: 'We build for speed. No bloat, just code that converts.',
    className: 'lg:col-span-2 lg:row-span-1',
  },
  {
    icon: <Shield size={22} />,
    title: 'Future Proof',
    desc: 'Scalable architecture that evolves with your brand.',
    className: 'lg:col-span-1',
  },
  {
    icon: <Target size={22} />,
    title: 'Precision Design',
    desc: 'Every pixel serves a purpose. No decorative noise.',
    className: 'lg:col-span-1',
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'Strategic Growth',
    desc: 'Data-driven decisions to scale your digital presence.',
    className: 'lg:col-span-2',
  },
  {
    icon: <Cpu size={22} />,
    title: 'Clean Integration',
    desc: 'Seamlessly connecting your stack with robust APIs.',
    className: 'lg:col-span-1',
  },
  {
    icon: <Activity size={22} />,
    title: 'Seamless Support',
    desc: 'Continuous monitoring and optimization.',
    className: 'lg:col-span-2',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
  },
};

const WhyChooseUs = () => {
  return (
    <section
      className='px-6 md:px-12 py-32 bg-black relative overflow-hidden'
      id='story-section'
    >
      <div className='max-w-7xl mx-auto mb-20'>
        <div className='flex flex-col md:flex-row md:items-end justify-between gap-8'>
          <div className='space-y-4'>
            <h4 className='font-mono text-[12px] uppercase tracking-widest  text-zinc-500'>
              // Why Choose our Studio ?
            </h4>
          </div>
          <p className='max-w-xs text-zinc-500 font-plex text-[11px] uppercase leading-relaxed tracking-wider'>
            We merge brutalist aesthetics with high-performance engineering to
            build the next generation of digital products.
          </p>
        </div>
        <div className='w-full h-px bg-zinc-900 mt-12' />
      </div>

      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-100px' }}
        className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900'
      >
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover='hover'
            className={`group relative p-12 bg-black overflow-hidden cursor-default transition-colors duration-500 ${r.className}`}
          >
            <motion.div
              variants={{ hover: { y: 0 } }}
              initial={{ y: '100%' }}
              transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
              className='absolute inset-0 bg-zinc-900/40 z-0'
            />

            <div className='relative z-10 h-full flex flex-col'>
              {/* Icon */}
              <div className='w-12 h-12 mb-12 flex items-center justify-center relative'>
                <div className='absolute inset-0 bg-zinc-900 border border-zinc-800 rounded-sm group-hover:bg-white group-hover:border-white transition-colors duration-500' />
                <div className='relative z-10 text-white group-hover:text-black transition-colors duration-500'>
                  {r.icon}
                </div>
              </div>

              <div className='mt-auto space-y-4'>
                <div className='flex items-center space-x-2'>
                  <span className='font-mono text-[10px] text-zinc-600'>
                    0{i + 1}
                  </span>
                  <div className='h-px w-6 bg-zinc-800 group-hover:w-12 group-hover:bg-white transition-all duration-500' />
                </div>

                <h3 className='text-3xl font-bold uppercase tracking-tighter text-white'>
                  {r.title}
                </h3>

                <p className='text-zinc-500 font-plex text-[12px] uppercase leading-relaxed tracking-widest opacity-60 group-hover:opacity-100 transition-opacity duration-500 max-w-sm'>
                  {r.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
