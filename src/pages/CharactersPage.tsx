import { useState, useEffect } from "react";
import { getCharacters } from "../api/getCharacters";
import { CharactersList } from "../components/CharactersList";

export const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setIsLoading(true);
        const data = await getCharacters();
        setCharacters(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCharacters();
  }, []);

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="shrink-0">
        <h1 className="text-3xl font-bold text-amber-100 font-serif text-center my-2 bg-linear-to-r from-amber-900 to-amber-800 rounded-lg shadow-lg">
          Characters
        </h1>
      </div>
      <CharactersList characters={characters} isLoading={isLoading} />
    </div>
  );
};
