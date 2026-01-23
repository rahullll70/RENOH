'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Footer from '@/components/sections/Footer';

const LegalContent = () => {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<'privacy' | 'legal' | 'tos'>(
    'privacy',
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
          h: 'Information We Collect',
          p: 'We collect personal information such as name, email address, phone number, and project-related details when you contact us or use our services.',
        },
        {
          h: 'Usage Data',
          p: 'We may automatically collect data including IP address, browser type, pages visited, and time spent on the website to improve performance and security.',
        },
        {
          h: 'How We Use Your Information',
          p: 'Your information is used to communicate with you, deliver services, manage projects, provide updates, and improve our offerings.',
        },
        {
          h: 'Data Sharing',
          p: 'We do not sell your data. Information may be shared with trusted service providers or during legal or business transfers when required.',
        },
        {
          h: 'Data Protection',
          p: 'We use reasonable technical and organizational measures to protect your personal data, though no method is 100% secure.',
        },
      ],
    },

    cookies: {
      title: 'COOKIE POLICY',
      body: [
        {
          h: 'Use of Cookies',
          p: 'Creativecue uses cookies and similar technologies to enhance user experience, analyze traffic, and improve website functionality.',
        },
        {
          h: 'Managing Cookies',
          p: 'You can disable cookies through your browser settings, but some features of the website may not function properly.',
        },
      ],
    },

    tos: {
      title: 'TERMS OF SERVICE',
      body: [
        {
          h: 'Service Agreement',
          p: 'By accessing or using our website and services, you agree to be bound by these Terms of Service and all applicable laws.',
        },
        {
          h: 'Project Engagement',
          p: 'All projects begin only after written confirmation and required advance payment are received.',
        },
        {
          h: 'Client Responsibilities',
          p: 'Clients must provide accurate information, timely feedback, and required materials to ensure smooth project completion.',
        },
        {
          h: 'Payments & Billing',
          p: 'Invoices must be paid within the agreed timeframe. Final deliverables are released only after full payment.',
        },
        {
          h: 'No Refund Policy',
          p: 'Due to the nature of services, payments are non-refundable once work has commenced, unless otherwise approved by Creativecue.',
        },
      ],
    },

    intellectualProperty: {
      title: 'INTELLECTUAL PROPERTY',
      body: [
        {
          h: 'Website Ownership',
          p: 'All website content, branding, designs, and code are the intellectual property of Creativecue unless stated otherwise.',
        },
        {
          h: 'Client Project Ownership',
          p: 'Upon full payment, ownership of final project deliverables is transferred to the client.',
        },
        {
          h: 'Portfolio Rights',
          p: 'Creativecue reserves the right to showcase completed projects on its website and social media unless restricted by NDA.',
        },
      ],
    },

    confidentiality: {
      title: 'CONFIDENTIALITY POLICY',
      body: [
        {
          h: 'Confidential Information',
          p: 'Any non-public information shared by the client during a project is treated as confidential.',
        },
        {
          h: 'Disclosure',
          p: 'Confidential information will not be disclosed to third parties except when legally required or agreed in writing.',
        },
      ],
    },

    delivery: {
      title: 'PROJECT DELIVERY POLICY',
      body: [
        {
          h: 'Timelines',
          p: 'Project timelines are estimates and may vary depending on scope changes, revisions, or client feedback delays.',
        },
        {
          h: 'Delays',
          p: 'Creativecue is not responsible for delays caused by missing content, late approvals, or third-party services.',
        },
      ],
    },

    refund: {
      title: 'REFUND & CANCELLATION POLICY',
      body: [
        {
          h: 'Non-Refundable Payments',
          p: 'All advance or subscription payments are non-refundable once work has started.',
        },
        {
          h: 'Project Cancellation',
          p: 'If a project is canceled mid-way, the client will be charged for work completed up to that point.',
        },
      ],
    },

    limitation: {
      title: 'LIMITATION OF LIABILITY',
      body: [
        {
          h: 'No Guarantees',
          p: 'Creativecue does not guarantee specific outcomes such as traffic, rankings, or revenue growth.',
        },
        {
          h: 'Liability Cap',
          p: 'Our total liability is limited to the amount paid by the client for the services.',
        },
      ],
    },

    governingLaw: {
      title: 'GOVERNING LAW',
      body: [
        {
          h: 'Jurisdiction',
          p: 'These policies are governed by the laws of Uttar Pradesh, India. Any disputes shall be resolved in the appropriate courts.',
        },
      ],
    },

    legal: {
      title: 'LEGAL NOTICE',
      body: [
        {
          h: 'Disclaimer',
          p: 'The website and services are provided on an “as-is” basis without warranties of any kind.',
        },
        {
          h: 'Third-Party Links',
          p: 'Creativecue is not responsible for the content or practices of third-party websites linked from our site.',
        },
      ],
    },

    contact: {
      title: 'CONTACT INFORMATION',
      body: [
        {
          h: 'Reach Us',
          p: 'For any questions regarding our policies or services, contact us at hello@creativecue.co.',
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
              <h2 className='text-zinc-500 uppercase tracking-widest text-lg font-semibold'>{`0${
                index + 1
              } — ${item.h}`}</h2>
              <p className='text-zinc-300 text-sm font-plex leading-relaxed max-w-2xl'>
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
