'use client';
import Footer from '@/components/sections/Footer';
import React, { useState } from 'react';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(1);

  const services = [
    {
      id: 1,
      title: 'WEB DEVELOPMENT',
      process:
        'WE ARCHITECT DIGITAL MONUMENTS USING A "PERFORMANCE-FIRST" RITUAL. FROM CLEAN-ROOM CODE STRUCTURE TO SUB-SECOND LOAD DEPLOYMENTS.',
      benefits:
        'SEARCH DOMINANCE. TECHNICAL RESILIENCE. UNRIVALED USER RETENTION.',
      tags: ['NEXT.JS 15', 'GSAP', 'ATOMIC DESIGN'],
    },
    {
      id: 2,
      title: 'BRAND IDENTITY',
      process:
        'A DEEP-DIVE EXCAVATION OF YOUR BRAND ETHOS. WE STRIP AWAY THE NOISE TO FIND THE "THORN"—THE SHARP, UNDENIABLE TRUTH OF YOUR BUSINESS.',
      benefits: 'MARKET AUTHORITY. VISUAL LEGACY. INSTANT RECOGNITION.',
      tags: ['TYPOGRAPHY', 'LOGOMARK', 'STRATEGY'],
    },
    {
      id: 3,
      title: 'UI/UX DESIGN',
      process:
        'MAPPING THE DIGITAL SANCTUARY. WE DESIGN FRICTION WHERE IT FORCES ENGAGEMENT AND FLUIDITY WHERE IT DRIVES CONVERSION.',
      benefits: 'INTUITIVE NAVIGATION. EMOTIONAL CONNECTION. HIGHER LTV.',
      tags: ['FIGMA', 'PROTOTYPING', 'BEHAVIORS'],
    },
    {
      id: 4,
      title: 'RE-ARCHITECTING',
      process:
        'LEGACY SYSTEMS ARE DISMANTLED AND REBORN. WE MIGRATE YOUR EXISTING VALUE INTO A MODERN, BRUTALIST FRAMEWORK WITHOUT DATA LOSS.',
      benefits: 'FUTURE-PROOFING. SCALABILITY. REDUCED TECHNICAL DEBT.',
      tags: ['MIGRATION', 'MODERNIZATION', 'VERCEL'],
    },
  ];

  const activeData =
    services.find((s) => s.id === activeService) || services[0];

  return (
    <div className='relative min-h-screen w-full bg-[#050505] text-white overflow-hidden selection:bg-white selection:text-black'>
      <div className='fixed inset-0 grid grid-cols-4 pointer-events-none z-0'>
        {[1, 2, 3].map((_, i) => (
          <div key={i} className='border-r border-neutral-800/40 h-full'></div>
        ))}
      </div>

      <main className='relative z-10 grid grid-cols-4 min-h-screen pt-40 px-6'>
        <div className='col-span-1 border-t border-neutral-900 pt-10'>
          <h2 className='text-[10px] uppercase tracking-[0.5em] text-neutral-500 font-mono mb-20'>
            PROCESS / CAPABILITIES
          </h2>

          <nav className='flex flex-col gap-6'>
            {services.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveService(s.id)}
                className={`text-left text-[10px] tracking-[0.3em] uppercase transition-all duration-500 ${
                  activeService === s.id
                    ? 'text-white translate-x-2'
                    : 'text-neutral-600 hover:text-neutral-400'
                }`}
              >
                [ 0{s.id} ] — {s.title}
              </button>
            ))}
          </nav>
        </div>

        <div className='col-span-3 border-t border-neutral-900 pt-10'>
          <div
            key={activeService}
            className='animate-in fade-in slide-in-from-bottom-4 duration-1000'
          >
            <h3 className='text-[6.5vw] font-StretchPro leading-[0.8] tracking-tighter uppercase mb-20'>
              {activeData.title}
            </h3>

            <div className='grid grid-cols-3 gap-12 mt-10'>
              <div className='col-span-1 space-y-8'>
                <h4 className='text-[10px] text-white tracking-[0.4em] uppercase border-b border-neutral-800 pb-3'>
                  THE PROCESS
                </h4>
                <p className='text-[11px] text-neutral-400 leading-relaxed uppercase tracking-widest font-plex'>
                  {activeData.process}
                </p>
              </div>

              <div className='col-span-1 space-y-8'>
                <h4 className='text-[10px] text-white tracking-[0.4em] uppercase border-b border-neutral-800 pb-3'>
                  THE BENEFIT
                </h4>
                <p className='text-[11px] text-white leading-relaxed uppercase tracking-widest font-plex'>
                  {activeData.benefits}
                </p>
              </div>

              <div className='col-span-1'>
                <div className='relative aspect-[3/4] w-full border border-neutral-900 bg-neutral-950 overflow-hidden group'>
                  <img
                    src=''
                    alt=''
                    className='w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700'
                  />
                  <div className='absolute inset-0 flex items-center justify-center p-4'>
                    <span className='text-[9px] text-neutral-800 font-mono uppercase tracking-[0.5em] -rotate-90 whitespace-nowrap'>
                      VISUAL_ASSET_{activeData.id}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tags / Technical Stack */}
            {/* <div className='mt-24 flex flex-wrap gap-4'>
               {activeData.tags.map(tag => (
                 <span key={tag} className='text-[9px] font-mono text-neutral-500 border border-neutral-900 px-5 py-2 uppercase tracking-widest'>
                   {tag}
                 </span>
               ))}
            </div> */}
          </div>
        </div>
      </main>

      {/* BACKGROUND BRANDING */}
      <div className='fixed bottom-0 right-0 z-0 pointer-events-none'>
        <h1
          className='text-[22vw] font-StretchPro leading-none opacity-[0.03] uppercase tracking-tighter select-none text-right'
          style={{ WebkitTextStroke: '1px white', color: 'transparent' }}
        ></h1>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
