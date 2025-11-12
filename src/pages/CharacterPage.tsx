import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCharacters } from '../api/getCharacters';
import { CharacterCard } from '../components/CharacterCard';
import type { Character } from '../types/types';

export const CharacterPage = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        setIsLoading(true);
        const data = await getCharacters();
        const found = data.find((character: Character) => character.id === id);
        setCharacter(found || null);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCharacter();
  }, [id]);

  return (
    <div className='min-h-screen bg-linear-to-b from-amber-950 to-amber-900 flex items-center justify-center p-1'>
      {isLoading ? (
        <p className='text-2xl text-amber-100 font-serif'>Loading...</p>
      ) : character ? (
        <div className='flex flex-col items-center'>
          <CharacterCard character={character} />
        </div>
      ) : (
        <p className='text-2xl text-amber-100 font-serif'>Character not found</p>
      )}
    </div>
  );
};