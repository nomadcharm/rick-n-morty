"use client"
import Image from "next/image";
import styles from "./scss/page.module.scss";
import { useGetCharactersQuery } from "./store/Features/CharactersApi/charactersApiSlice";
import { Character } from "./types/Character";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/navigation";
import { Navigation } from 'swiper/modules'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  const router = useRouter();
  const { data, isError, isLoading } = useGetCharactersQuery({ page: 1 });

  if (isError) {
    return <div>Error...</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <section className={styles.page}>
      <h1>Rick and Morty Characters</h1>
      <Swiper
        className={styles.swiper}
        spaceBetween={50}
        slidesPerView={5}
        navigation={true}
        scrollbar={{ draggable: true }}
        loop={true}
        modules={[Navigation]}
      >
        {
          data?.results.map((character: Character) => {
            return <SwiperSlide key={character.id} className={styles.slide}>
              <div className={styles.slideContent} onClick={() => router.push(`/characters/${character.id}`)}>
                <h2>{character.name}</h2>
                <p>Status: {character.status}</p>
                <Image src={character.image} alt={character.name} width={150} height={150} priority />
              </div>
            </SwiperSlide>
          })
        }
      </Swiper>

      <button onClick={() => router.push("/characters")}>Смотреть все</button>
    </section>
  );
}
