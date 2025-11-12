import { NavLink } from "react-router-dom";
import clsx from "clsx";

export const Sidebar = () => {
  const baseLinkClasses = "flex-1 sm:flex-none rounded-md p-3 sm:p-4 border-2 border-yellow-400 transition-all duration-300 transform shadow-md";
  const hoverClasses = "hover:scale-105 hover:bg-yellow-100";
  const activeClasses = "bg-yellow-100 border-yellow-500";
  const inactiveClasses = "bg-white";

  return (
    <div className="bg-linear-to-b sm:bg-linear-to-b from-amber-900 via-yellow-800 to-amber-950 p-4 sm:p-8 w-full sm:w-[30%] sm:min-h-screen shadow-2xl border-4 border-yellow-300 rounded-lg">
      <div className="bg-linear-to-br from-amber-50 to-yellow-50 rounded-lg p-4 sm:p-6 shadow-inner flex sm:flex-col">
        <nav className="flex gap-2 sm:gap-4 w-full sm:flex-col">

          <NavLink
            to="/characters"
            className={({ isActive }) =>
              clsx(
                baseLinkClasses,
                hoverClasses,
                isActive ? activeClasses : inactiveClasses
              )
            }
          >
            <span className="text-amber-900 font-bold text-xs sm:text-lg block text-center line-clamp-2">
              Characters
            </span>
          </NavLink>

          <NavLink
            to="/spells"
            className={({ isActive }) =>
              clsx(
                baseLinkClasses,
                hoverClasses,
                isActive ? activeClasses : inactiveClasses
              )
            }
          >
            <span className="text-amber-900 font-bold text-xs sm:text-lg block text-center line-clamp-2">
              Spells
            </span>
          </NavLink>
        </nav>

        <div className="hidden sm:block mt-6 sm:mt-8 pt-4 sm:pt-6 border-t-2 border-yellow-400 w-full">
          <p className="text-amber-800 text-xs italic text-center font-serif">
            "Honeydukes' finest collection"
          </p>
        </div>
      </div>
    </div>
  );
};
