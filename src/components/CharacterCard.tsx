import type { Character } from "../types/types"

type CharacterProps = {
  character: Character;
}

export const CharacterCard = ({ character }: CharacterProps) => {
  
  return (
    <li key={character.id} className='flex flex-col justify-center items-center text-center p-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl max-w-[300px] bg-linear-to-b from-amber-900 to-amber-950 border-2 border-amber-700 shadow-lg'>
      <div className='relative w-[250px] h-[230px] mb-3'>
        <img
          alt={character.name}
          src={character.image || 'unknown.webp'}
          className='w-full h-full object-contain rounded-lg border-4 border-amber-600 shadow-inner'
        />
      </div>
      <h2 className='text-xl font-bold text-amber-100 mb-2 font-serif'>{character.name}</h2>
      <p className='text-sm text-amber-200 mb-1 font-serif'>{character.house || 'Unknown House'}</p>
      <p className='text-xs text-amber-300 font-serif'>Born: {character.yearOfBirth || 'Unknown'}</p>
    </li>
  )
}