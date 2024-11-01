"use client"
import styles from "./scss/page.module.scss";
import { useGetCharactersQuery } from "./store/Features/CharactersApi/charactersApiSlice";
import { Character } from "./types/Character";

export default function Home() {
  const { data, isError, isLoading } = useGetCharactersQuery({ page: 1 });

  if (isError) {
    return <div>Error...</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  console.log(data)

  return (
    <section className={styles.page}>
      <h1>Rick and Morty Characters</h1>

      <ul>
        {data?.results.map((character: Character) => (
          <li key={character.id}>
            <h2>{character.name}</h2>
            <p>Status: {character.status}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
