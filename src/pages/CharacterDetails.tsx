import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCharacters } from '../api/getCharacters';
import type { Character } from '../types/types';

export const CharacterDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        setIsLoading(true);
        const data = await getCharacters();
        const found = data.find((c: Character) => c.id === id);
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
    <div className='min-h-screen bg-linear-to-b from-amber-950 to-amber-900 flex items-center justify-center p-4'>
      {isLoading ? (
        <p className='text-2xl text-amber-100 font-serif'>Loading...</p>
      ) : character ? (
        <div className='flex flex-col items-center p-8 rounded-2xl bg-linear-to-b from-amber-900 to-amber-950 border-4 border-amber-600 shadow-2xl max-w-[500px]'>
          <img alt={character.name} src={character.image || 'unknown.png'} className='w-[350px] h-[350px] object-cover rounded-xl border-4 border-amber-600 mb-6 shadow-lg' />
          <h1 className='text-4xl font-bold text-amber-100 mb-4 font-serif'>{character.name}</h1>
          <div className='w-full space-y-3 text-lg text-amber-200 font-serif'>
            <p><span className='text-amber-300 font-bold'>House:</span> {character.house || 'Unknown'}</p>
            <p><span className='text-amber-300 font-bold'>Born:</span> {character.yearOfBirth || 'Unknown'}</p>
            <p><span className='text-amber-300 font-bold'>Actor:</span> {character.actor || 'Unknown'}</p>
          </div>
        </div>
      ) : (
        <p className='text-2xl text-amber-100 font-serif'>Character not found</p>
      )}
    </div>
  );
};