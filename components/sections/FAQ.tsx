'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'What is your typical timeline?',
      a: 'Most radical identities take 4-8 weeks. Quality is non-negotiable.',
    },
    {
      q: 'Do you offer post-launch support?',
      a: "We architect ecosystems, we don't just ship code. Support is built-in.",
    },
    {
      q: 'How do you handle project pricing?',
      a: 'We work on a value-based fixed fee model. No hidden hourly surprises—just transparent investment for defined outcomes.',
    },
    {
      q: 'Can we integrate custom 3D or motion?',
      a: 'Motion is our DNA. Every project includes high-fidelity interactions and custom animations tailored to your brand narrative.',
    },
  ];

  return (
    <section className='px-6 md:px-12 py-32 max-w-4xl mx-auto'>
      <h2 className='text-[12px] font-mono uppercase mb-16 tracking-tighter'>
        // Inquiries / FAQ
      </h2>
      <div className='border-t border-zinc-900'>
        {faqs.map((faq, index) => {
          const isOpen = activeFaq === index;
          
          return (
            <div key={index} className='border-b border-zinc-900'>
              <button
                onClick={() => setActiveFaq(isOpen ? null : index)}
                className='w-full py-12 flex justify-between items-center group text-left'
              >
                <span
                  className={`text-2xl uppercase font-bold transition-colors duration-300 ${
                    isOpen ? 'text-white' : 'text-zinc-600 group-hover:text-zinc-400'
                  }`}
                >
                  {faq.q}
                </span>

                {/* ANIMATED ICON */}
                <div className="relative flex items-center justify-center w-3 h-3">
                  {/* Horizontal line (always there) */}
                  <div className="absolute w-full h-[2px] bg-current" />
                  {/* Vertical line (rotates/shrinks to become minus) */}
                  <motion.div
                    initial={false}
                    animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute w-full h-[2px] bg-current rotate-90"
                  />
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className='overflow-hidden'
                  >
                    <p className='pb-12 text-zinc-500 font-mono text-xs uppercase leading-relaxed max-w-2xl'>
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;