import React from 'react'
import RecenzeCards from './RecenzeCards'

const Recenze = () => {
  return (
    <div id='reference' className='bg-[var(--bg-gray)]'>
      <div className='py-20 max-w-11/12 mx-auto text-base space-y-5'>
        <h4 className='text-3xl text-center'>Co říkají naši zákazníci</h4>
        <p className='text-center'>Přečtěte si, jak byli naši zákazníci spokojeni s našimi službami a výsledky péče o jejich vozidla.</p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 pt-15'>
          <RecenzeCards
            description="Profesionální přístup a výborné výsledky. Auto vypadá mnohem lépe než kdy předtím. Matyášovi se podařilo odstranit škrábance, které jsem považoval za neodstranitelné."
            zakaznik="Tomáš Novák"
            auto="BMW M3"            
          />
          
          <RecenzeCards
            description="Výborná komunikace, flexibilita a hlavně precizní práce. Interiér našeho rodinného vozu vypadá jako nový, i přes čtyřletý provoz a dvě děti. Určitě doporučuji!"
            zakaznik="Jana Procházková"
            auto="Audi Q7"            
          />
          
          <RecenzeCards
            description="Skvělá práce s keramickou ochranou. Po třech měsících stále perfektní odpuzování vody a minimální usazování nečistot. Profesionální přístup a poradenství na vysoké úrovni."
            zakaznik="Petr Svoboda"
            auto="Mercedes CLS"            
          />
          
          <RecenzeCards
            description="Renovace světlometů předčila moje očekávání. Výsledek je naprosto perfektní a služba byla provedena rychle a za rozumnou cenu."
            zakaznik="Martin Dvořák"
            auto="Škoda Kodiaq RS"     
          />
        </div>
      </div>
    </div>
  )
}

export default Recenze
