import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
      <header className='h-screen max-w-11/12 mx-auto flex items-center justify-center text-center px-4'>
        <div className='space-y-5 w-full'>
          <h1 className='text-4xl md:text-6xl'>
            <span className='text-[var(--modra)]'>ML</span> Detailing
          </h1>
          <p className='text-lg md:text-2xl'>"Dobrý detail začíná tam, kde končí pohled na pouhou čistotu."</p>
          <p className='text-sm md:text-base'>
            Profesionální péče o vaše vozidlo s důrazem na každý detail.
          </p>
          <div className='flex flex-col sm:flex-row sm:justify-center sm:gap-5 gap-3 w-full max-w-md mx-auto'>
            <Link
              className='text-base sm:text-lg bg-[var(--modra)] hover:bg-[var(--modra-hover)] transition-all py-2 px-4 rounded-lg w-full sm:w-auto text-white text-center'
              href="#"
            >
              Objednat službu
            </Link>
            <Link
              className='text-base sm:text-lg bg-[var(--card-gray)] hover:bg-[var(--gray-hover)] transition-all py-2 px-4 rounded-lg w-full sm:w-auto text-center'
              href=""
            >
              Nezávazná konzultace
            </Link>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
