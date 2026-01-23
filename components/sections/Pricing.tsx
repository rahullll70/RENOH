'use client';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Starter',
    price: '$499',
    description: 'Perfect for individuals & small businesses starting online',
    features: [
      'High-Conversion Landing Page',
      'Responsive Website',
      'Modern UI/UX Design',
      'SEO Setup',
      'Contact Form Integration',
      '1 Week Delivery',
      '1 Month Free Support',
    ],
    cta: 'Secure Slot',
  },
  {
    name: 'Premium',
    price: '$999',
    description: 'Ideal for growing brands that need performance & polish',
    features: [
      '5–7 Page Website',
      'Custom UI/UX Design',
      'Advanced SEO Optimization',
      'Animations & Micro-interactions',
      'CMS Integration',
      'Performance Optimization',
      '2 Weeks Delivery',
      '3 Months Support',
    ],
    popular: true,
    cta: 'Secure Slot',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For startups & enterprises needing full-scale solutions',
    features: [
      'Unlimited Pages',
      'Branding & Design System',
      'Web App Development',
      'Custom Backend / APIs',
      'Authentication & Dashboard',
      'Scalable Architecture',
      'Priority Support',
      'Dedicated Project Manager',
    ],
    cta: 'Contact Us',
  },
];

const Pricing = () => (
  <section className='px-6 md:px-12 py-32 border-t border-zinc-900 bg-black'>
    <div className='space-y-4'>
      <h4 className='font-mono text-[12px] uppercase tracking-widest text-zinc-500 mb-10'>
        // Pricing / Plans
      </h4>
    </div>

    <div className='flex flex-col md:flex-row border-l border-zinc-900'>
      {plans.map((p, i) => (
        <motion.div
          key={i}
          whileHover='hover'
          initial='rest'
          className='flex-1 border-r border-b md:border-b-0 border-zinc-900 p-8 md:p-12 relative overflow-hidden group min-h-[520px] flex flex-col justify-between'
        >
          <motion.div
            variants={{
              rest: { y: '100%' },
              hover: { y: 0 },
            }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className='absolute inset-0 bg-white z-0'
          />

          {p.popular && (
            <span className='absolute top-6 right-6 z-20 font-mono text-[9px] uppercase tracking-widest bg-black text-white px-3 py-1'>
              Popular
            </span>
          )}

          <div className='relative z-10 transition-colors duration-500 group-hover:text-black'>
            <div className='flex justify-between items-start mb-10'>
              <h4 className='font-plex text-[10px] uppercase tracking-[0.4em] opacity-60'>
                {p.name}
              </h4>
              <span className='font-mono text-[10px]'>0{i + 1}</span>
            </div>

            <div className='mb-10'>
              <motion.div
                variants={{ rest: { x: 0 }, hover: { x: 10 } }}
                className='text-6xl md:text-7xl font-bold tracking-tighter mb-1'
              >
                {p.price}
              </motion.div>
              <p className='font-plex text-[10px] mt-2 opacity-50 uppercase tracking-widest'>
                {p.price === 'Custom' ? 'Let’s Discuss' : 'Starting at'}
              </p>
            </div>

            <ul className='space-y-2'>
              {p.features.map((f, j) => (
                <li
                  key={j}
                  className='flex items-center text-[11px] font-plex uppercase tracking-tight'
                >
                  <motion.div
                    variants={{
                      rest: {
                        scale: 1,
                        backgroundColor: 'rgba(255,255,255,0.1)',
                      },
                      hover: {
                        scale: 1.2,
                        backgroundColor: 'rgba(0,0,0,1)',
                      },
                    }}
                    className='w-1.5 h-1.5 rounded-full mr-4'
                  />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <motion.button
            variants={{
              rest: { opacity: 0, y: 20 },
              hover: { opacity: 1, y: 0 },
            }}
            onClick={() => {
              if (p.name === 'Enterprise') {
                window.location.href = '/contact';
              } else {
                window.location.href = `/contact?plan=${p.name}`;
              }
            }}
            className='relative z-10 w-full py-6 mt-5 bg-black text-white text-[10px] font-plex uppercase tracking-[0.2em] cursor-pointer'
          >
            {p.cta}
          </motion.button>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Pricing;
