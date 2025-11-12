import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import type { Spell } from '../types/types.ts';
import { SpellCard } from './SpellCard.tsx';

type Props = {
  spells: Spell[];
  isLoading: boolean;
};

const ITEMS_PER_PAGE = 6;

export const SpellsList = ({ spells, isLoading }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(spells.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedSpells = spells.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="flex flex-col flex-1  w-full">
      {isLoading ? (
        <div className="flex-1 flex items-center justify-center text-white text-xl">Loading...</div>
      ) : (
        <>
          <ul className="flex-1  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-full justify-items-center">
            {paginatedSpells.map(spell => (
              <NavLink key={spell.id} to={`/spells/${spell.id}`}>
                <SpellCard spell={spell} />
              </NavLink>
            ))}
          </ul>

          <div className="shrink-0 flex justify-center items-center gap-4 p-4 bg-black/30 border-t border-purple-900">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => p - 1)}
              className="px-4 py-2 bg-yellow-400 text-black font-bold rounded disabled:opacity-50 hover:bg-yellow-300 transition"
            >
              Prev
            </button>
            <span className="px-4 py-2 text-white font-medium">
              {currentPage} / {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => p + 1)}
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
