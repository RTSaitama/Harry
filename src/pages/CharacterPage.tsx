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

  return isLoading ? <p>Loading...</p> : character ? <CharacterCard character={character} /> : <p>Not found</p>;
};