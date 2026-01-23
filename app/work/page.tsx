'use client';
import Footer from '@/components/sections/Footer';
import React, { useState } from 'react';

const RenohWorkPage = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      date: '2024 12 07',
      title: 'THE THORNED GATHERING',
      category: 'OPENING NIGHT',
      img: '/api/placeholder/800/400',
      pos: 'top-[5%] left-[45%] w-[40%] h-[25%]',
    },
    {
      id: 2,
      date: '2025 01 18',
      title: 'DOMINION BRIEFING',
      category: 'CONCEPT SALON',
      img: '/api/placeholder/600/600',
      pos: 'top-[20%] right-[5%] w-[30%] h-[40%]',
    },
    {
      id: 3,
      date: '2025 02 15',
      title: 'THORN ATELIER',
      category: 'BESPOKE CRAFT SESSION',
      img: '/api/placeholder/500/700',
      pos: 'bottom-[10%] left-[40%] w-[25%] h-[50%]',
    },
    {
      id: 4,
      date: '2025 03 08',
      title: 'SHADOWS & CROWNS',
      category: 'IMMERSIVE EXHIBITION',
      img: '/api/placeholder/800/500',
      pos: 'top-[15%] left-[50%] w-[45%] h-[30%]',
    },
    {
      id: 5,
      date: '2025 03 30',
      title: 'CEREMONY OF FRACTURES',
      category: 'LIVE PERFORMANCE',
      img: '/api/placeholder/900/400',
      pos: 'top-[10%] left-[5%] w-[40%] h-[30%]',
    },
    {
      id: 6,
      date: '2025 04 05',
      title: 'RITE OF THORNS',
      category: 'MEMBERSHIP INDUCTION RITUAL',
      img: '/api/placeholder/700/400',
      pos: 'top-[15%] left-[42%] w-[35%] h-[28%]',
    },
    {
      id: 7,
      date: '2025 05 10',
      title: 'BLOOD & VELVET',
      category: 'SECRET PARTY',
      img: '/api/placeholder/500/500',
      pos: 'bottom-[20%] left-[40%] w-[35%] h-[40%]',
    },
    {
      id: 8,
      date: '2025 06 14',
      title: 'OBSIDIAN PORTRAIT',
      category: 'BESPOKE CRAFT SESSION',
      img: '/api/placeholder/600/400',
      pos: 'top-[40%] right-[10%] w-[30%] h-[30%]',
    },
    {
      id: 9,
      date: '2025 07 12',
      title: 'VINE OF OATHS',
      category: "COLLECTOR'S PRIVATE SALON",
      img: '/api/placeholder/500/400',
      pos: 'top-[5%] right-[15%] w-[25%] h-[30%]',
    },
    {
      id: 10,
      date: '2025 08 09',
      title: 'ASH & IVORY',
      category: 'EXHIBITION OF RAW ELEMENTS',
      img: '/api/placeholder/400/600',
      pos: 'bottom-[5%] left-[47%] w-[32%] h-[42%]',
    },
    {
      id: 11,
      date: '2025 08 23',
      title: 'SILENT CONQUEROR',
      category: 'CLUB NIGHT',
      img: '/api/placeholder/600/400',
      pos: 'top-[10%] left-[10%] w-[30%] h-[20%]',
    },
    {
      id: 12,
      date: '2025 09 13',
      title: 'CROWN ARCHIVE',
      category: 'VIEWING OF UNRELEASED RELICS',
      img: '/api/placeholder/700/500',
      pos: 'bottom-[15%] right-[10%] w-[40%] h-[35%]',
    },
  ];

  return (
    <div className='relative min-h-screen w-full bg-[#050505] text-white selection:bg-white selection:text-black overflow-x-hidden'>
      {/* 1. FIXED BACKGROUND GRID */}
      <div className='fixed inset-0 grid grid-cols-4 pointer-events-none z-0'>
        <div className='border-r border-neutral-800/50 h-full'></div>
        <div className='border-r border-neutral-800/50 h-full'></div>
        <div className='border-r border-neutral-800/50 h-full'></div>
        <div className='h-full'></div>
      </div>

      <div className='relative z-20 flex flex-col justify-center min-h-screen py-20'>
        {projects.map((project) => (
          <div
            key={project.id}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            className='group grid grid-cols-4 items-center border-b border-neutral-900/50 py-4 px-6 cursor-pointer hover:bg-white/[0.02] transition-colors duration-300'
          >
            <span className='text-[10px] font-mono text-neutral-500 tabular-nums tracking-tighter'>
              {project.date}
            </span>
            <span
              className={`text-[13px] font-light tracking-[0.1em] transition-all duration-500 ${
                hoveredId === project.id
                  ? 'italic translate-x-4 text-white'
                  : 'text-neutral-400'
              }`}
            >
              {project.title}
            </span>
            <span className='text-[9px] uppercase tracking-widest text-neutral-600'>
              {project.category}
            </span>
            <div></div>
          </div>
        ))}
      </div>

      <div className='fixed bottom-10 right-10 z-10 pointer-events-none'>
        <h1
          className='text-[15vw] font-StretchPro leading-none opacity-5 uppercase tracking-tighter select-none italic'
          style={{ WebkitTextStroke: '1px white', color: 'transparent' }}
        ></h1>
      </div>

      <div className='fixed inset-0 z-40 pointer-events-none'>
        {projects.map((project) => (
          <div
            key={project.id}
            className={`absolute transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden ${project.pos} ${
              hoveredId === project.id
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-12 scale-105'
            }`}
          >
            <img
              src={project.img}
              alt={project.title}
              className='w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000'
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default RenohWorkPage;
