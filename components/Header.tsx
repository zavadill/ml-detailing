import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
      <header className='h-screen max-w-11/12 mx-auto flex items-center justify-center text-center'> 
        <div className='space-y-5'>
          <h1 className='text-6xl'><span className='text-[var(--modra)]'>ML</span> Detailing</h1>
          <p className='text-2xl'>"Dobrý detail začíná tam, kde končí pohled na pouhou čistotu."</p>
          <p className='text-base'>Profesionální péče o vaše vozidlo s důrazem na každý detail.</p>
          <div className='space-x-5'>
            <Link
            className='text-lg bg-[var(--modra)] hover:bg-[var(--modra-hover)] transition-all py-2 px-4 rounded-lg'
              href="#"
            >
              Objednat službu
            </Link>
            <Link
              className='text-lg bg-[var(--card-gray)] hover:bg-[var(--gray-hover)] transition-all py-2 px-4 rounded-lg'
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
