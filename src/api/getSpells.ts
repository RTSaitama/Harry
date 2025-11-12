import { BASE_URL } from "../constants/constants";
const path = 'spells';
export const getSpells = async () => {
  const res = await fetch(`${BASE_URL}/${path}`);
  if(!res.ok) {
    throw new Error('Failed to fetch spells');
  }
  return res.json();
}