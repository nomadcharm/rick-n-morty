import { ApiResponse } from "@/app/types/ApiResponse";
import { Character } from "@/app/types/Character";
import { BASE_URL } from "./charactersApiSlice";

export const getAllCharacterIds = async (): Promise<number[]> => {
  const allCharacterIds = [];
  const totalPages = 42;

  for (let page = 1; page <= totalPages; page++) {
    const response = await fetch(`${BASE_URL}?page=${page}`);

    if (!response.ok) {
      throw new Error(`Cannot get the character ids from page ${page}`);
    }

    const characters: ApiResponse<Character> = await response.json();
    allCharacterIds.push(...characters.results.map(character => character.id));
  }

  return allCharacterIds;
};
