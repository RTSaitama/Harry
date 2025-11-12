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

  return isLoading ? <p>Loading...</p> : spell ? <SpellCard spell={spell} /> : <p>Not found</p>;
};