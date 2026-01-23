'use client';
import Footer from '@/components/sections/Footer';
import React, { useState } from 'react';

const AboutPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='relative min-h-screen w-full bg-[#050505] text-white overflow-hidden selection:bg-white selection:text-black'>
      {/* 1. GLOBAL 4-COLUMN GRID LINES */}
      <div className='fixed inset-0 grid grid-cols-4 pointer-events-none z-0'>
        {[1, 2, 3].map((_, i) => (
          <div key={i} className='border-r border-neutral-800/50 h-full'></div>
        ))}
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <main className='relative z-10 grid grid-cols-4 min-h-screen pt-40 px-6'>
        {/* Column 1: Label */}
        <div className='col-span-1'>
          <h2 className='text-[10px] uppercase tracking-[0.5em] text-neutral-500 font-mono'>
            Agency / Ethos [03]
          </h2>
        </div>

        {/* Column 2 & 3: Main Bio Text */}
        <div className='col-span-2 space-y-12'>
          <section>
            <h3 className='text-3xl md:text-5xl font-light leading-tight tracking-tight uppercase '>
              Renoh is a{' '}
              <span className='italic font-StretchPro whitespace-nowrap'>digital sanctuary</span>{' '}
              where brutalist structure meets organic chaos.
            </h3>
            <p className='mt-8 text-xs text-neutral-400 leading-relaxed max-w-lg uppercase tracking-wider font-plex'>
              We do not just build websites; we architect digital monuments.
              Based on the philosophy of the thorn—sharp, intentional, and
              protective—we craft experiences for those who value depth over
              convenience.
            </p>
          </section>

          {/* Core Pillars */}
          <div className='grid grid-cols-2 gap-10 border-t border-neutral-900 pt-12'>
            <div>
              <h4 className='text-[10px] text-white mb-4 tracking-[0.3em]'>
                ARCHIVE
              </h4>
              <p className='text-[10px] text-neutral-500 leading-relaxed uppercase font-plex'>
                Every project is a ritual. We document the evolution of raw
                elements into refined digital artifacts.
              </p>
            </div>
            <div>
              <h4 className='text-[10px] text-white mb-4 tracking-[0.3em]'>
                PURPOSE
              </h4>
              <p className='text-[10px] text-neutral-500 leading-relaxed uppercase font-plex'>
                To challenge the scroll. We create friction where it matters,
                ensuring your brand is felt, not just seen.
              </p>
            </div>
          </div>
        </div>

        {/* Column 4: Large Interactive Brand Element */}
        <div
          className='col-span-1 flex flex-col justify-end pb-20 items-end'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`transition-all duration-1000 ${isHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}`}
          >
            <img
              src='/thorn-logo-detail.png'
              alt='Renoh Emblem'
              className='w-full opacity-60 mix-blend-lighten grayscale hover:grayscale-0 transition-all'
            />
          </div>
        </div>
      </main>

      {/* 3. BACKGROUND BRANDING TEXT */}
      <div className='fixed bottom-0 left-0 w-full z-0 pointer-events-none translate-y-1/4'>
        <h1
          className='text-[22vw] font-StretchPro leading-none opacity-5 uppercase tracking-tighter select-none text-center '
          style={{ WebkitTextStroke: '1px white', color: 'transparent' }}
        >
          
        </h1>
      </div>

      {/* 4. THE METALLIC THORN OVERLAY (Consistent with Work/Service) */}
      <div className='fixed inset-0 pointer-events-none z-20 opacity-30 mix-blend-screen overflow-hidden'>
        <img
          src='/thorn-structure.png'
          className='absolute -right-20 top-0 h-full w-auto object-cover opacity-40 rotate-12'
          alt=''
        />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
