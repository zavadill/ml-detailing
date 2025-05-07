'use client';

import React from 'react'
import Link from 'next/link'
import { useState } from 'react';
import { useEffect } from 'react';

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 1);
    };
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // >>> Přidej tohle volání!
  
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
  <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow ${scrolled ? 'h-16 bg-[var(--header-gray)]/90 backdrop-blur-sm' : 'h-20'}`}>
    <nav className="max-w-11/12 w-full mx-auto px-4 h-full flex justify-between items-center">
      <Link href="/"><span className='text-[var(--modra)]'>ML</span> DETAILING</Link>
      <div className="flex gap-4">
        <Link className='hover:text-[var(--modra)]' href="/">Úvod</Link>
        <Link className='hover:text-[var(--modra)]' href="#about">O mně</Link>
        <Link className='hover:text-[var(--modra)]' href="#sluzby">Služby</Link>
        <Link className='hover:text-[var(--modra)]' href="#reference">Reference</Link>
        <Link className='hover:text-[var(--modra)]' href="#contact">Kontakt</Link>
      </div>
      <Link href="/" className=' rounded-lg px-3 py-1 bg-[var(--modra)] hover:bg-[var(--modra-hover)]'>Rezervovat</Link>
    </nav>
  </div>
  )
}

export default Navbar
