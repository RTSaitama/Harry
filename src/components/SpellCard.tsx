import type { Spell } from "../types/types"

type SpellProps = {
  spell: Spell;
}

export const SpellCard = ({ spell }: SpellProps) => {

  return (
    <li key={spell.id} className='flex flex-col min-w-[300px] justify-center items-center text-center p-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl max-w-[300px] h-[300px] bg-linear-to-b from-purple-900 to-purple-950 border-2 border-purple-700 shadow-lg'>
      <p className='text-xl font-bold text-purple-100 mb-3 font-serif'>{spell.name}</p>
      <p className='text-sm text-purple-200 leading-relaxed font-serif'>{spell.description || 'No description available'}</p>
    </li>
  )
}