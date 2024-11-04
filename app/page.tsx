"use client";
import Loader from "./components/Loader";
import { Character } from "./types/Character";
import { useGetCharactersQuery } from "./store/Features/CharactersApi/charactersApiSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/navigation";
import { Navigation } from "swiper/modules"
import CharacterCard from "./components/CharacterCard";
import NotFound from "./not-found";

import "swiper/css";
import "swiper/css/navigation";
import styles from "./scss/page.module.scss";

export default function Home() {
  const router = useRouter();
  const { data: characters, isError, isLoading } = useGetCharactersQuery({ page: 1 });

  if (isError) {
    return <NotFound />
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <section className={styles.main}>

      <div className={styles.main__divider}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 0L0 0 892.25 114.72 1200 0z" />
        </svg>
      </div>

      <div className="container">
        <div className={styles.main__content}>
          <h1 className={styles.main__title}>Rick and Morty Characters</h1>
          <Swiper
            className={styles.swiper}
            spaceBetween={20}
            navigation={true}
            scrollbar={{ draggable: true }}
            loop={true}
            modules={[Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {
              characters?.results.map((character: Character) => {
                return <SwiperSlide key={character.id} className={styles.slide}>
                  <CharacterCard character={character} />
                </SwiperSlide>
              })
            }
          </Swiper>

          <button
            className={styles.main__button}
            onClick={() => router.push("/characters")}
          >More characters &#8640;</button>
        </div>
      </div>
    </section>
  );
}
