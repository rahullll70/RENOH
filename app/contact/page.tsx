'use client';

import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import {
  ArrowUpRight,
  Instagram,
  Twitter,
  Linkedin,
  Github,
} from 'lucide-react';

const reveal: Variants = {
  initial: { y: 30, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
  },
};

const ContactPage = () => {
  const [gmtTime, setGmtTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }).format(now);
      setGmtTime(`${timeString} GMT`);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className='bg-black text-white min-h-screen px-6 md:px-12 pt-40 pb-20 selection:bg-white selection:text-black'>
      <div className='max-w-7xl mx-auto'>
        {/* Header Section */}
        <motion.div
          initial='initial'
          animate='animate'
          variants={reveal}
          className='border-b border-white/10 pb-12 mb-20'
        >
          <div className='flex justify-between items-start mb-8'>
            <h1 className='text-[12vw] leading-[0.85] font-bold uppercase tracking-tighter'>
              Let's <br /> Build.
            </h1>
            <div className='hidden md:block text-right'>
              <p className='font-mono text-[10px] uppercase tracking-[0.4em] text-white/40 mb-1'>
                Current Time
              </p>
              <p className='font-mono text-xl font-bold tracking-tighter'>
                {gmtTime || '00:00:00 GMT'}
              </p>
            </div>
          </div>
          <p className='font-mono text-[10px] uppercase tracking-[0.4em] text-white/40 max-w-md'>
            / Pushing boundaries Q1 2026. Inquiries are processed within 24
            hours.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-24'>
          {/* Left: Contact Form */}
          <motion.div
            initial='initial'
            animate='animate'
            variants={reveal}
            className='space-y-12'
          >
            <form className='space-y-8'>
              <div className='group relative border-b border-white/10 py-4 focus-within:border-white transition-colors'>
                <label className='block font-mono text-[10px] uppercase text-white/40 mb-2'>
                  01 / Full Name
                </label>
                <input
                  type='text'
                  placeholder='NAME'
                  className='w-full bg-transparent outline-none text-xl uppercase font-bold placeholder:text-zinc-800'
                />
              </div>

              <div className='group relative border-b border-white/10 py-4 focus-within:border-white transition-colors'>
                <label className='block font-mono text-[10px] uppercase text-white/40 mb-2'>
                  02 / Email Address
                </label>
                <input
                  type='email'
                  placeholder='EMAIL'
                  className='w-full bg-transparent outline-none text-xl uppercase font-bold placeholder:text-zinc-800'
                />
              </div>

              <div className='group relative border-b border-white/10 py-4 focus-within:border-white transition-colors'>
                <label className='block font-mono text-[10px] uppercase text-white/40 mb-2'>
                  03 / Project Detail
                </label>
                <textarea
                  rows={4}
                  placeholder='THE VISION'
                  className='w-full bg-transparent outline-none text-xl uppercase font-bold placeholder:text-zinc-800 resize-none'
                />
              </div>

              <motion.button
                whileHover={{ backgroundColor: '#fff', color: '#000' }}
                whileTap={{ scale: 0.98 }}
                className='bg-transparent cursor-pointer border border-white text-white w-full py-6 rounded-full font-mono text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-2 group transition-colors'
              >
                Send Inquiry
                <ArrowUpRight
                  size={14}
                  className='group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'
                />
              </motion.button>
            </form>
          </motion.div>

          {/* Right: Info & Socials */}
          <motion.div
            initial='initial'
            animate='animate'
            variants={reveal}
            transition={{ delay: 0.2 }}
            className='flex flex-col justify-between space-y-20 lg:space-y-0'
          >
            <div className='space-y-12'>
              <section>
                <h3 className='font-mono text-[10px] uppercase text-white/40 mb-4'>
                  Direct Communication
                </h3>
                <a
                  href='mailto:hello@renoh.agency'
                  className='text-2xl font-bold uppercase hover:text-zinc-400 transition-colors underline underline-offset-8 decoration-1 decoration-white/10'
                >
                  hello@renoh.agency
                </a>
              </section>

              <section>
                <h3 className='font-mono text-[10px] uppercase text-white/40 mb-4'>
                  Base
                </h3>
                <p className='text-2xl font-bold uppercase'>New Delhi, India</p>
                <p className='font-mono text-[10px] text-white/40 tracking-widest mt-1 uppercase'>
                  Current Time: {gmtTime}
                </p>
              </section>
            </div>

            <div className='grid grid-cols-2 gap-4'>
              {[
                { name: 'Instagram', icon: <Instagram size={14} /> },
                // { name: 'LinkedIn', icon: <Linkedin size={14} /> },
                { name: 'Twitter', icon: <Twitter size={14} /> },
                { name: 'Github', icon: <Github size={14} /> },
              ].map((social) => (
                <a
                  key={social.name}
                  href='#'
                  className='flex items-center justify-between p-6 border border-white/5 hover:bg-white hover:text-black transition-all duration-500 rounded-2xl group'
                >
                  <span className='font-mono text-[10px] uppercase tracking-widest'>
                    {social.name}
                  </span>
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
