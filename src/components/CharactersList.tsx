import { NavLink } from 'react-router-dom';
import type { Character } from '../types/types.ts';
import { CharacterCard } from './CharacterCard.tsx';

type Props = {
  characters: Character[];
  isLoading: boolean;
}

export const CharactersList = ({ characters, isLoading }: Props) => {
  return (
    <div className="w-full">
      {isLoading ?
        <p>Loading...</p>
        :
<ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-full justify-items-center'>          {characters.map((character) => {
            return (
          
              <NavLink to={`/characters/${character.id}`} state={{ character }}>
                <CharacterCard character={character} />
              </NavLink>
            )
          })}
        </ul>
      }
    </div>
  )
}