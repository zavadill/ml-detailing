import React from 'react'

const About = () => {
  return (
    <div id='about' className='bg-[var(--bg-gray)]'>
      <div className='max-w-11/12 mx-auto py-20 flex lg:flex-col'>
        <div className='flex-1/2 flex items-center'>
            <img src="sdsd" alt="" />
            <div className='p-7 bg-[var(--modra)] rounded-lg'>
                <p>3 roky zkušeností</p>
                <p>v profesionálním detailingu</p>
            </div>
        </div>
        <div className='flex-1/2 text-base space-y-5'>
            <h2 className='text-3xl'>O mně</h2>
            <p className='text-3xl font-montser'>Matyáš Lexmaul</p>
            <p className=''>Vítejte v ML Detailing, kde se péče o váš vůz stává uměním. Jako zakladatel a hlavní detailer, přináším do každého projektu vášeň pro dokonalost a více než pět let zkušeností v oboru. Věřím, že opravdový detailing není jen o čistotě – je o preciznosti, péči a respektu k vašemu vozidlu.</p>
            <p className=''>Můj přístup je jednoduchý: každý automobil si zaslouží individuální péči zaměřenou na nejmenší detaily. Používám pouze prémiové produkty a nejmodernější techniky, abych dosáhl výsledků, které překonají vaše očekávání.</p>
            <div className='p-2'>
                <p><span className='text-[var(--modra)] text-lg'>&#10003;</span> Certifikovany detailer</p>
                <p><span className='text-[var(--modra)] text-lg'>&#10003;</span> Inviduální přístup</p>
                <p><span className='text-[var(--modra)] text-lg'>&#10003;</span> Flexibiln termíny</p>
                <p><span className='text-[var(--modra)] text-lg'>&#10003;</span> Prémiové produkty</p>
                <p><span className='text-[var(--modra)] text-lg'>&#10003;</span> Pozornost k detailům</p>
                <p><span className='text-[var(--modra)] text-lg'>&#10003;</span> Záruka spokojenosti</p>
            </div>
            <p className='pl-3 border-l-4 border-[var(--modra)]'>Věřím, že každé auto má svůj charakter a příběh. Mým cílem je ten příběh vyzdvihnout a přivést ho k dokonalosti skrze detailní péči."</p>
        </div>
      </div>
    </div>
  )
}

export default About
