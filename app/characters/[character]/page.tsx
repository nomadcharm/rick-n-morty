"use client";
import { useGetCharacterByIdQuery } from "@/app/store/Features/CharactersApi/charactersApiSlice";
import { use } from "react";
import styles from "../../scss/character.module.scss";
import Image from "next/image";

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
    <section className={styles.character}>
      <div className={styles.container}>
        {character && (
          <div className={styles.wrapper}>
              <div className={styles.image}>
                <Image src={character.image} alt={character.name} width={250} height={250} priority />
              </div>
              <div className={styles.info}>
                <h1 className={styles.title}>{character.name}</h1>
                <p>Status: {character.status}</p>
                <p>Species: {character.species}</p>
                {character.type && (<p>Type: {character.type}</p>)}
                <p>Gender: {character.gender}</p>
                <p>Planet of Origin: {character.origin.name}</p>
                <p>Current Location: {character.location.name}</p>
              </div>
            </div>
        )}
      </div>
    </section>
  );
};

export default Character
