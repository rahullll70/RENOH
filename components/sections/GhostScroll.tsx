'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const textReveal: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } 
  },
  // viewport: { once: false, margin: "-25%" }
};

const GhostScroll = () => {
  return (
    <section className="bg-black w-full overflow-hidden">
      
      {/* Sequence 1 */}
      <div className="h-screen w-full flex items-center justify-center px-6">
        <motion.div variants={textReveal} initial="initial" whileInView="whileInView" className="text-center">
          <h1 className="text-4xl md:text-6xl font-medium tracking-tighter text-zinc-500">
            Wait for it...
          </h1>
        </motion.div>
      </div>

      {/* Sequence 2 */}
      <div className="h-screen w-full flex items-center justify-center px-6">
        <motion.div variants={textReveal} initial="initial" whileInView="whileInView" className="text-center">
          <h1 className="text-4xl md:text-6xl font-medium tracking-tighter text-zinc-300">
            Looking for <span className="text-zinc-500 italic">something?</span>
          </h1>
        </motion.div>
      </div>

      {/* Sequence 3 */}
      <div className="h-screen w-full flex items-center justify-center px-6">
        <motion.div variants={textReveal} initial="initial" whileInView="whileInView" className="text-center">
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-zinc-200">
            "Is it just us, or is it getting <br />
            <span className="text-white italic font-serif">creative</span> in here?"
          </h1>
        </motion.div>
      </div>

      {/* Sequence 4 */}
      <div className="h-screen w-full flex items-center justify-center px-6">
        <motion.div variants={textReveal} initial="initial" whileInView="whileInView" className="text-center">
          <h1 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter text-white">
            Plot twist: <br /> There's more.
          </h1>
        </motion.div>
      </div>

      {/* Sequence 5 - Final Call */}
      <div className="h-screen w-full flex items-center justify-center px-6">
        <motion.div variants={textReveal} initial="initial" whileInView="whileInView" className="text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-medium tracking-tighter text-zinc-400">
            "You found me."
          </h1>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <p className="text-white text-xl font-light">Now click 'Start Project'.</p>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent animate-bounce mt-4" />
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="group"
          >
            <motion.a
              href="mailto:hello@renoh.agency"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center gap-6 bg-white text-black px-14 py-7 rounded-full transition-all duration-500 hover:bg-zinc-200"
            >
              <span className="text-2xl font-StretchPro uppercase tracking-wide relative z-10">
                Start Project
              </span>
              <ArrowUpRight className="w-8 h-8 relative z-10 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.a>
          </motion.div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default GhostScroll;