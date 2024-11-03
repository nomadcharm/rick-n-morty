"use client"
import Image from "next/image";
import Loader from "./components/Loader";
import { Character } from "./types/Character";
import { useGetCharactersQuery } from "./store/Features/CharactersApi/charactersApiSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/navigation";
import { Navigation } from 'swiper/modules'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./scss/page.module.scss";
import NotFound from "./not-found";

export default function Home() {
  const router = useRouter();
  const { data, isError, isLoading } = useGetCharactersQuery({ page: 1 });

  if (isError) {
    return <NotFound />
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <section className={styles.page}>

      <div className={styles.divider}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 0L0 0 892.25 114.72 1200 0z" />
        </svg>
      </div>

      <div className="container">
        <div className={styles.content}>
        <h1 className={styles.title}>Rick and Morty Characters</h1>
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
                <article className={styles.card} onClick={() => router.push(`/characters/${character.id}`)}>
                  <Image src={character.image} alt={character.name} width={150} height={150} priority />
                  <div className={styles.cardContent}>
                  <h2>{character.name}</h2>
                  </div>
                </article>
              </SwiperSlide>
            })
          }
        </Swiper>

        <button 
          className={styles.button} 
          onClick={() => router.push("/characters")}
        >More characters</button>
      </div>
        </div>
    </section>
  );
}
