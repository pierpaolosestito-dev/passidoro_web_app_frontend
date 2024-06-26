import { writable, derived } from 'svelte/store';

export const apiData = writable([]);

export const drinkNames = derived(apiData, ($apiData) => {
  if ($apiData.drinks){
    return $apiData.drinks.map(drink => drink.strDrink);
  }
  return [];
});

export const email = writable("");
export const api_key = writable("");
