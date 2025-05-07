import React from 'react'
import { CustomCardsPropsRecenze } from '@/types'
import { Star } from 'lucide-react';


const RecenzeCards = ({auto, containerStyles, description, zakaznik} : CustomCardsPropsRecenze) => {
  return (
    <div className='p-5 border-[1px] border-[var(--header-gray)] rounded-lg space-y-5 bg-[var(--card-gray)] hover:border-[var(--modra)] transition-all duration-150'>
      <div className=''>
      <p className="flex py-2">
        <Star className="fill-current text-[var(--modra)] size-4.5" />
        <Star className="fill-current text-[var(--modra)] size-4.5" />
        <Star className="fill-current text-[var(--modra)] size-4.5" />
        <Star className="fill-current text-[var(--modra)] size-4.5" />
        <Star className="fill-current text-[var(--modra)] size-4.5" />
      </p>
        <p className='italic text-[var(--gray-text)]'>"{description}"</p>
      </div>
      <div className='border-t-1 border-[var(--gray-hover)] py-2'>
        <p className='bold'>{zakaznik}</p>
        <p>{auto}</p>
      </div>
    </div>
  )
}

export default RecenzeCards
