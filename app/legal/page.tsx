'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Footer from '@/components/sections/Footer';

const LegalContent = () => {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<'privacy' | 'legal' | 'tos'>(
    'privacy'
  );
 
  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'privacy' || tab === 'legal' || tab === 'tos') {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const content = {
    privacy: {
      title: 'PRIVACY POLICY',
      body: [
        {
          h: 'Information Collection',
          p: 'We collect information you provide directly to us through contact forms, including name and email.',
        },
        {
          h: 'Usage',
          p: 'Your data is used solely to provide our services and communicate regarding project updates.',
        },
      ],
    },
    legal: {
      title: 'LEGAL NOTICE',
      body: [
        {
          h: 'Ownership',
          p: 'This website and its content are owned by Renoh Studio. All rights reserved.',
        },
        {
          h: 'Copyright',
          p: 'The visual design and code are protected by copyright laws.',
        },
      ],
    },
    tos: {
      title: 'TERMS OF SERVICE',
      body: [
        {
          h: 'Engagement',
          p: 'Work begins only after a signed agreement and deposit are received.',
        },
        {
          h: 'Payments',
          p: 'Invoices are due within 14 days. Deliverables are released upon full payment.',
        },
      ],
    },
  };

  return (
    <div className='min-h-screen bg-black text-white p-8 md:p-24 font-sans'>
      <nav className='flex gap-8 mb-20 border-b border-zinc-800 pb-4'>
        {(['privacy', 'legal', 'tos'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-xs tracking-widest uppercase transition-colors cursor-pointer relative group pb-2 ${
              activeTab === tab
                ? 'text-white'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            {tab === 'tos' ? 'Terms' : tab}
            <span
              className={`absolute bottom-[-1px] left-0 h-[1px] bg-white transition-all duration-500 ${
                activeTab === tab ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            />
          </button>
        ))}
      </nav>

      <div className='max-w-4xl'>
        <h1 className='text-5xl md:text-7xl font-bold mb-16 tracking-tighter'>
          {content[activeTab].title}
        </h1>
        <div className='space-y-12'>
          {content[activeTab].body.map((item, index) => (
            <section key={index} className='space-y-4'>
              <h2 className='text-zinc-500 uppercase tracking-widest text-sm font-semibold'>{`0${
                index + 1
              } — ${item.h}`}</h2>
              <p className='text-zinc-300 text-lg leading-relaxed max-w-2xl'>
                {item.p}
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function LegalPage() {
  return (
    <Suspense fallback={<div className='bg-black min-h-screen' />}>
      <LegalContent />
      <Footer />
    </Suspense>
  );
}
