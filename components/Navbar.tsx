'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 1);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow ${scrolled ? 'h-16 bg-[var(--header-gray)]/90 backdrop-blur-sm' : 'h-20'}`}>
      <nav className="max-w-7xl w-full mx-auto px-4 h-full flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold">
          <span className='text-[var(--modra)]'>ML</span> DETAILING
        </Link>

        {/* Desktop odkazy */}
        <div className="hidden lg:flex gap-4">
          <Link className='hover:text-[var(--modra)]' href="/">Úvod</Link>
          <Link className='hover:text-[var(--modra)]' href="#about">O mně</Link>
          <Link className='hover:text-[var(--modra)]' href="#sluzby">Služby</Link>
          <Link className='hover:text-[var(--modra)]' href="#reference">Reference</Link>
          <Link className='hover:text-[var(--modra)]' href="#contact">Kontakt</Link>
        </div>

        {/* Tlačítko rezervace (viditelné pořád) */}
        <Link href="/" className='hidden lg:inline-block rounded-lg px-3 py-1 bg-[var(--modra)] hover:bg-[var(--modra-hover)]'>
          Rezervovat
        </Link>

        {/* Hamburger ikona (mobil) */}
        <button className="lg:hidden" onClick={toggleMenu}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobilní menu */}
{menuOpen && (
  <div
    className="lg:hidden fixed top-0 left-0 w-full h-screen bg-[var(--header-gray)]/95 backdrop-blur-md z-40"
    onClick={toggleMenu} // Kliknutí mimo zavře
  >
    <div
      className="flex flex-col items-center justify-center gap-6 h-full"
      onClick={(e) => e.stopPropagation()} // Zabrání zavření při kliknutí na odkaz
    >
      <Link onClick={toggleMenu} className='text-xl hover:text-[var(--modra)]' href="/">Úvod</Link>
      <Link onClick={toggleMenu} className='text-xl hover:text-[var(--modra)]' href="#about">O mně</Link>
      <Link onClick={toggleMenu} className='text-xl hover:text-[var(--modra)]' href="#sluzby">Služby</Link>
      <Link onClick={toggleMenu} className='text-xl hover:text-[var(--modra)]' href="#reference">Reference</Link>
      <Link onClick={toggleMenu} className='text-xl hover:text-[var(--modra)]' href="#contact">Kontakt</Link>
      <Link onClick={toggleMenu} className='mt-4 rounded-lg px-4 py-2 bg-[var(--modra)] hover:bg-[var(--modra-hover)]' href="/">
        Rezervovat
      </Link>
    </div>
  </div>
)}
    </div>
  );
};

export default Navbar;
