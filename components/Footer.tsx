import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
        <div className='max-w-11/12 mx-auto flex py-10'>
            <div className='space-y-2 flex-1/2 px-5 flex flex-col'>
                <p className='text-lg pb-5'><span className='text-[var(--modra)]'>ML</span> DETAILING</p>
                <p>Profesionální detailing a péče o váš automobil s důrazem na kvalitu a detail.</p>
                <p>© 2025 ML Detailing. Všechna práva vyhrazena.</p>
            </div>
            <div className='space-y-1.5 flex-1/2 px-5 flex flex-col'>
                <p className='text-lg pb-5'>Rychlé odkazy</p>
                <Link href="/">Úvod</Link>
                <Link href="#about">O mně</Link>
                <Link href="#sluzby">Služby</Link>
                <Link href="#reference">Reference</Link>
                <Link href="#contact">Kontakt</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer
