import Image from "next/image";
import { Character } from "../types/Character";
import styles from "../scss/characterCard.module.scss";
import Link from "next/link";

const CharacterCard = ({character} : {character: Character}) => {

  return (
    <Link href={`/characters/${character.id}`}>
    <article className={styles.card}>
      <Image className={styles.card__img} src={character.image} alt={character.name} width={160} height={170} priority />
      <div className={styles.card__content}>
        <h2 className={styles.card__title}>{character.name}</h2>
        <div className={styles.card__info}>
          <p className={styles.card__detail}>Status: <span>{character.status}</span></p>
          <p className={styles.card__detail}>Last known location: <span>{character.location.name}</span></p>
        </div>
      </div>
    </article>
    </Link>
  );
};

export default CharacterCard;
