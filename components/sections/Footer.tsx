import React from 'react'

const Footer = () => {
  return (
    <div>
      
      <footer className='px-6 md:px-12 py-12 flex flex-col md:flex-row justify-between items-center border-t border-zinc-900 text-zinc-700 font-mono text-[12px] uppercase'>
        <p>© 2026 Renoh Studio</p>
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
