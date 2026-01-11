'use client';

import { useEffect } from 'react';
import { gsap } from '@/lib/gsap';

export default function About() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.about-line .fill', {
        clipPath: 'inset(0 0% 0 0)',
        stagger: 0.25,
        ease: 'none',
        scrollTrigger: {
          trigger: '.about-wrap',
          start: 'top 80%',
          end: 'top 30%',
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const lines = [
    'RENOH IS A BOUTIQUE AGENCY FOCUSED ON PERSONAL BRANDING, RADICAL MINIMALISM. WE BUILD DIGITAL ECOSYSTEMS FOR THOSE WHO VALUE PRECISION.',
  ];

  return (
    <section className='px-6 md:px-12 py-64 flex justify-center'>
      <div className='about-wrap space-y-3 max-w-6xl'>
        {lines.map((text, i) => (
          <div key={i} className='about-line relative overflow-hidden'>
            <span className='block text-zinc-900 font-bold uppercase text-[clamp(3rem,6vw,7rem)]'>
              {text}
            </span>
            <span
              className='fill absolute inset-0 text-white font-bold uppercase text-[clamp(3rem,6vw,7rem)]'
              style={{ clipPath: 'inset(0 100% 0 0)' }}
            >
              {text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
