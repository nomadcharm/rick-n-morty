import Image from "next/image";
import { useRouter } from "next/navigation";
import { Character } from "../types/Character";
import styles from "../scss/characterCard.module.scss";

const CharacterCard = ({character} : {character: Character}) => {
  const router = useRouter();

  return (
    <article className={styles.card} onClick={() => router.push(`/characters/${character.id}`)}>
      <Image src={character.image} alt={character.name} width={160} height={170} priority />
      <div className={styles.card__content}>
        <h2 className={styles.card__title}>{character.name}</h2>
        <div className={styles.card__info}>
          <p className={styles.card__detail}>Status: <span>{character.status}</span></p>
          <p className={styles.card__detail}>Last known location: <span>{character.location.name}</span></p>
        </div>
      </div>
    </article>
  );
};

export default CharacterCard;
