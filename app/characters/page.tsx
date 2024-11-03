"use client";
import { useEffect, useRef, useState } from "react";
import { useGetCharactersQuery } from "../store/Features/CharactersApi/charactersApiSlice";
import { Character } from "../types/Character";
import CharacterCard from "../components/CharacterCard";
import Loader from "../components/Loader";
import NotFound from "../not-found";
import styles from "../scss/characterList.module.scss";
import { useRouter } from "next/navigation";

const Characters = () => {
  const router = useRouter();
  const [page, setPage] = useState<number>(1);
  const { data: characters, isError, isLoading } = useGetCharactersQuery({ page });
  const [charactersList, setCharactersList] = useState<Character[]>([]);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (characters) {
      setCharactersList((prevList) => {
        const existingIds = new Set(prevList.map(character => character.id));
        const newCharacters = characters.results.filter(character => !existingIds.has(character.id));
        return [...prevList, ...newCharacters];
      });
    }
  }, [characters]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && characters?.info.next) {
        setPage((prevPage) => prevPage + 1);
      }
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    };

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [characters]);

  if (isLoading && page === 1) {
    return <Loader />;
  };

  if (isError) {
    return <NotFound />;
  };

  return (
    <section className={styles.characters}>
      <div className={styles.characters__divider}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" />
        </svg>
      </div>
      <div className="container">
        <button className={styles.characters__back} onClick={() => router.back()}>&#8636; Back</button>
        <h1 className={styles.characters__title}>All Rick and Morty Characters</h1>
        <ul className={styles.characters__list}>
          {
            charactersList.map((character: Character) => (
              <li className={styles.characters__item} key={character.id}>
                <CharacterCard character={character} />
              </li>
            ))
          }
        </ul>
        <div ref={loaderRef} />
      </div>
    </section>
  );
};

export default Characters;
