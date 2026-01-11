'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

 const FAQ = () => {
  // State to track which accordion is open
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
      <h2 className='text-4xl font-bold uppercase mb-16 tracking-tighter'>
        Inquiries / FAQ
      </h2>
      <div className='border-t border-zinc-900'>
        {faqs.map((faq, index) => (
          <div key={index} className='border-b border-zinc-900'>
            <button
              onClick={() => setActiveFaq(activeFaq === index ? null : index)}
              className='w-full py-12 flex justify-between items-center'
            >
              <span
                className={`text-2xl uppercase font-bold transition-colors duration-300 ${
                  activeFaq === index ? 'text-white' : 'text-zinc-600'
                }`}
              >
                {faq.q}
              </span>
              {activeFaq === index ? <Minus size={20} /> : <Plus size={20} />}
            </button>
            
            <AnimatePresence>
              {activeFaq === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className='overflow-hidden'
                >
                  <p className='pb-12 text-zinc-500 font-mono text-xs uppercase leading-relaxed'>
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;