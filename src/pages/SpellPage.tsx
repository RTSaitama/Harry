import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getSpells } from '../api/getSpells';
import { SpellCard } from '../components/SpellCard';
import type { Spell } from '../types/types';

export const SpellPage = () => {
  const { id } = useParams<{ id: string }>();
  const [spell, setSpell] = useState<Spell | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSpell = async () => {
      try {
        setIsLoading(true);
        const data = await getSpells();
        const found = data.find((spell: Spell) => spell.id === id);
        setSpell(found || null);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSpell();
  }, [id]);

  return (
    <div className='min-h-screen bg-linear-to-b from-purple-950 to-purple-900 flex items-center justify-center p-4'>
      {isLoading ? (
        <p className='text-2xl text-purple-100 font-serif'>Loading...</p>
      ) : spell ? (
        <div className='flex flex-col items-center'>
          <SpellCard spell={spell} />
        </div>
      ) : (
        <p className='text-2xl text-purple-100 font-serif'>Spell not found</p>
      )}
    </div>
  );
};