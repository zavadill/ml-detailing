import React from 'react'
import CustomCards from './CustomCards'
import { Car } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import { PaintBucket } from 'lucide-react';
import { Brush } from 'lucide-react';
import { Wrench } from 'lucide-react';
import { Shield } from 'lucide-react';


const Services = () => {
  return (
    <div id='sluzby' className='bg-[var(--header-gray)]'>
        <div className='py-20 max-w-11/12 mx-auto text-base flex flex-col space-y-5'>
            <h3 className='text-3xl text-center'>Naše služby</h3>
            <p className='text-center '>Nabízíme komplexní služby v oblasti detailingu vozidel. Od základního mytí až po nejvyšší úroveň péče s dlouhodobou ochranou pomocí moderních technologií.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-15'>
                <CustomCards
                    title='Exteriérový detailing'
                    logo={<Car />}
                    description={'Kompletní péče o vnější části vozidla včetně mytí, dekontaminace, leštění a voskování.'}
                />

                <CustomCards
                    title='Interiérový detailing'
                    logo={<Sparkles />}
                    description={'Důkladné čištění a renovace interiéru včetně čalounění, plastů, kůže a klimatizace.'}
                />
                
                <CustomCards
                    title='Leštění laku'
                    logo={<PaintBucket />}
                    description={'Odstranění škrábanců, hologramů a oxidace pro dokonalý lesk a hloubku barvy.'}
                />
                
                <CustomCards
                    title='Keramická ochrana'
                    logo={<Brush />}
                    description={'Dlouhodobá ochrana laku pomocí keramických povlaků s hydrofobním efektem a vysokým leskem.'}
                />
                
                <CustomCards
                    title='Renovace světlometů'
                    logo={<Shield />}
                    description={'Oživení a obnova zmatněných a zažloutlých světlometů pro lepší viditelnost a vzhled.'}
                />
                
                <CustomCards
                    title='Renovace kol a disků'
                    logo={<Wrench />}
                    description={'Speciální čištění a ochrana kol, pneumatik a podběhů pro dokonalý vzhled.'}
                />
            </div>
        </div>
    </div>
  )
}

export default Services
