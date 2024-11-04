"use client";
import { useGetCharacterByIdQuery } from "@/app/store/Features/CharactersApi/charactersApiSlice";
import NotFound from "@/app/not-found";
import Loader from "@/app/components/Loader";
import Image from "next/image";
import styles from "../../scss/character.module.scss";
import { useRouter } from "next/navigation";

interface CharacterClientProps {
  characterId: number;
}

const CharacterClient = ({ characterId }: CharacterClientProps) => {
  const router = useRouter();
  const { data: character, isError, isLoading } = useGetCharacterByIdQuery({ id: characterId });

  if (isError) {
    return <NotFound />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className={styles.character}>
      <div className={styles.character__divider}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" />
        </svg>
      </div>

      <div className="container">
        <div className={styles.character__wrapper}>
          {character && (
            <>
              <div className={styles.character__img}>
                <Image src={character.image} alt={character.name} width={250} height={250} priority />
              </div>
              <div className={styles.character__content}>
                <h1 className={styles.character__title}>{character.name}</h1>
                <div className={styles.character__info}>
                  <p>Status: <span>{character.status}</span></p>
                  <p>Species: <span>{character.species}</span></p>
                  {character.type && <p>Type: <span>{character.type}</span></p>}
                  <p>Gender: <span>{character.gender}</span></p>
                  <p>Planet of Origin: <span>{character.origin.name}</span></p>
                  <p>Current Location: <span>{character.location.name}</span></p>
                </div>
                <button className={styles.character__back} onClick={() => router.back()}>&#8636; Back</button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default CharacterClient;
