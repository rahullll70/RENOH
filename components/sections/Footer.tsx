import React from 'react'

const Footer = () => {
  return (
    <div>
      
      <footer className='px-6 md:px-12 py-12 flex flex-col md:flex-row justify-between items-center border-t border-zinc-900 text-zinc-700 font-mono text-[12px] uppercase'>
        <p>© 2026 Renoh Studio</p>
        <div className='space-x-10 '>
          <a href="" className='hover:text-white transition-all duration-300'> privacy/policy</a>
          <a href="" className='hover:text-white transition-all duration-300'> legal</a>
          <a href="" className='hover:text-white transition-all duration-300'>terms of service</a>
        </div>
        <div className='flex space-x-8 mt-4 md:mt-0'>
          <span className='hover:text-white cursor-pointer transition-colors'>
            Instagram
          </span>
          <span className='hover:text-white cursor-pointer transition-colors'>
            x/Twitter
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Footer
