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
    <div>
      <h1>Spells</h1>
      <SpellsList spells={spells} isLoading={isLoading} />
    </div>
  )
}