import { useState, useEffect } from "react";
import { getCharacters } from "../api/getCharacters"
import { CharactersList } from "../components/CharactersList";

export const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() =>{
    const fetchCharacters = async () => {
      try {
        setIsLoading(true);
        const data = await getCharacters();
        setCharacters(data);
      } catch(error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCharacters();
  }, []);

  return (
    <div>
      <h1 className="text-5xl font-bold text-amber-100 mb-8 font-serif text-center py-6 bg-linear-to-r from-amber-900 to-amber-800 rounded-lg shadow-lg">Characters</h1>
      <CharactersList characters={characters} isLoading={isLoading} />
    </div>
  );
} 