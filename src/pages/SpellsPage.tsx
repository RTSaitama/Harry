import { useState, useEffect } from "react";
import { getSpells } from "../api/getSpells";
import { SpellsList } from "../components/SpellsList";
export const SpellsPage =() => {
  const [spells, setSpells] = useState([]);
  const [isLoading, setIsLoading] = useState(false);  

  useEffect(() =>{
    const fetchSpells = async () => {
      try {
        setIsLoading(true);
        const data = await getSpells();
        setSpells(data);
      } catch(error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSpells();
  }, []);
  return (
<div className="flex flex-col h-full overflow-hidden">
  <h1 className="text-3xl my-2 font-bold text-purple-100  font-serif text-center  bg-linear-to-r from-purple-900 to-purple-800 rounded-lg shadow-lg">
    Spells
  </h1>
  <SpellsList spells={spells} isLoading={isLoading} />
</div>

  )
}