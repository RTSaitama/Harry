import type { Character } from "../types/types"

type CharacterProps = {
  character: Character;
}

export const CharacterCard = ({ character }: CharacterProps) => {
  
  return (
    <li key={character.id} className='flex flex-col justify-center items-center text-center m-4 transition-all duration-300 transform hover:scale-105 max-w-[300px]'>
      <img
        alt='character avatar'
        src={character.image || 'unknown.png'}
        className='w-[250px] h-[250px] object-cover rounded-lg'
      />
      <h2>{character.name}</h2>
      <p>{character.house}</p>
      <p className='w-[100px]'>{character.yearOfBirth}</p>
    </li>
  )
}