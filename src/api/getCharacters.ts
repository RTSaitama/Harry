import { BASE_URL } from "../constants/constants";
const path = 'characters';
export const getCharacters = async () => {
  const res = await fetch(`${BASE_URL}/${path}`);
  if(!res.ok) {
    throw new Error('Failed to fetch characters');
  }
  return res.json();
}