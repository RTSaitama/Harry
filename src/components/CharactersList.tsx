 import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import type { Character } from '../types/types.ts';
import { CharacterCard } from './CharacterCard.tsx';
import { ITEMS_PER_PAGE } from '../constants/constants.ts';

type Props = {
  characters: Character[];
  isLoading: boolean;
};



export const CharactersList = ({ characters, isLoading }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(characters.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedCharacters = characters.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  
  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      {isLoading ? (
        <div className="flex-1 flex items-center justify-center text-white text-xl">
          Loading...
        </div>
      ) : (
        <>
          <ul className="flex-1 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 justify-items-center">
            {paginatedCharacters.map((character) => (
              <NavLink
                key={character.id}
                to={`/characters/${character.id}`}
                state={{ character }}
                className="w-full max-w-[320px]"
              >
                <CharacterCard character={character} />
              </NavLink>
            ))}
          </ul>

          <div className="shrink-0 flex justify-center items-center gap-4 p-4 bg-black/30 border-t border-purple-900">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="px-4 py-2 bg-yellow-400 text-black font-bold rounded disabled:opacity-50 hover:bg-yellow-300 transition"
            >
              Prev
            </button>
            <span className="px-4 py-2 text-white font-medium">
              {currentPage} / {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="px-4 py-2 bg-yellow-400 text-black font-bold rounded disabled:opacity-50 hover:bg-yellow-300 transition"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};
