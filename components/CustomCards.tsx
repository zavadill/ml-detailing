import React from 'react'
import { CustomCardsProps } from '@/types'

const CustomCards = ({logo, title, description} : CustomCardsProps) => {
  return (
    <div className="p-5 border-[1px] border-[var(--header-gray)] rounded-lg space-y-5 bg-[var(--card-gray)] hover:border-[var(--modra)] transition-all duration-150">
      <p className='inline-block p-3 rounded-full text-[var(--modra)] bg-[var(--modra-transparent)]'>{logo}</p>
      <p className='text-lg'>{title}</p>
      <p className='text-base text-[var(--gray-text)]'>{description}</p>
    </div>
  )
}

export default CustomCards
