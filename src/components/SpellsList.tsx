import { NavLink } from 'react-router-dom';
import type { Spell } from '../types/types.ts';
import { SpellCard } from './SpellCard.tsx';
type Props = {
  spells: Spell[];
  isLoading: boolean;
}

export const SpellsList = ({ spells, isLoading }: Props) => {
  return (
    <div className="w-full">
      {isLoading ?
        <p>Loading...</p>
        :
<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-full justify-items-center'>          {spells.map((spell) => {
            const { id } = spell;
            return (
              <NavLink key={spell.id} to={`/spells/${id}`}>
                <SpellCard spell={spell} />
              </NavLink>
            )
          })}
        </ul>
      }
    </div>
  )
}