import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='px-6 md:px-12 py-12 flex flex-col md:flex-row justify-between items-center border-t border-zinc-900 text-zinc-700 font-plex text-[12px] uppercase'>
      <p>© 2026 Renoh Studio</p>
      
      <div className='flex space-x-10'>
        {[
          { name: 'privacy/policy', href: '/legal?tab=privacy' },
          { name: 'legal', href: '/legal?tab=legal' },
          { name: 'terms of service', href: '/legal?tab=tos' }
        ].map((link) => (
          <Link 
            key={link.name} 
            href={link.href} 
            className='hover:text-white transition-all duration-300 relative group pb-1'
          >
            {link.name}
            <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-500 group-hover:w-full" />
          </Link>
        ))}
      </div>

      <div className='flex space-x-8 mt-4 md:mt-0'>
        {['Instagram', 'x/Twitter'].map((social) => (
          <span key={social} className='hover:text-white cursor-pointer transition-colors relative group pb-1 text-zinc-500'>
            {social}
            <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-500 group-hover:w-full" />
          </span>
        ))}
      </div>
    </footer>
  )
}

export default Footer