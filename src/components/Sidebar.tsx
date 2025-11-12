import { NavLink } from "react-router-dom"

export const Sidebar = () => {
  return (
    <div className="bg-linear-to-b from-amber-900 via-yellow-800 to-amber-950 p-8 w-full max-w-[30%] min-h-screen shadow-2xl border-4 border-yellow-300 rounded-lg">
      <div className="bg-linear-to-br from-amber-50 to-yellow-50 rounded-lg p-6 shadow-inner">
        
        <h2 className="text-2xl font-bold text-amber-900 mb-8 font-serif text-center tracking-wider">
          ✨ Меню ✨
        </h2>

        <nav className="flex flex-col gap-4">
       
          <NavLink 
            to="/characters"
            className={({ isActive }) => `bg-white rounded-md p-4 border-2 border-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-md ${isActive ? 'bg-yellow-100 border-yellow-500' : 'hover:bg-yellow-100'}`}
          >
            <span className="text-amber-900 font-bold text-lg block text-center">
              👤 Characters
            </span>
          </NavLink>

          <NavLink 
            to="/spells"
            className={({ isActive }) => `bg-white rounded-md p-4 border-2 border-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-md ${isActive ? 'bg-yellow-100 border-yellow-500' : 'hover:bg-yellow-100'}`}
          >
            <span className="text-amber-900 font-bold text-lg block text-center">
              ⚡ Spells
            </span>
          </NavLink>
        </nav>

        <div className="mt-8 pt-6 border-t-2 border-yellow-400">
          <p className="text-amber-800 text-xs italic text-center font-serif">
            "Honeydukes' finest collection"
          </p>
        </div>
      </div>
    </div>
  );
};

 