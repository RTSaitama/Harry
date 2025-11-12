import type { Spell } from "../types/types"

type SpellProps = {
  spell: Spell;
}

export const SpellCard = ({ spell }: SpellProps) => {

  return (
    <li key={spell.id} className='flex flex-col justify-center items-center text-center m-4 transition-all duration-300 transform hover:scale-105 max-w-[300px]' >
      <p>{spell.name}<p>
      </p>{spell.description}</p>
    </li>
  )
}