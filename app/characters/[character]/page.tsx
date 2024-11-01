"use client";
import { useGetCharacterByIdQuery } from "@/app/store/Features/CharactersApi/charactersApiSlice";
import { use } from "react";


interface CharacterParams {
  character: number;
}

const Character = ({ params }: { params: Promise<CharacterParams> }) => {
  const unwrappedParams = use(params);

  const { data: character, isError, isLoading } = useGetCharacterByIdQuery({ id: unwrappedParams.character });

  if (isError) {
    return <div>Error...</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Character: {character?.name}</h1>
    </div>
  );
};

export default Character
