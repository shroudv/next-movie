import React from 'react'
import styles from './styles.module.css'
import movies from '@/mocks/movies.json'
import Image from 'next/image';
import Collapse from './components/collapse';

const findMovie = async (id) => {
  const query = await movies.results.find(movie => movie.id.toString() === id.toString())
  return query;

}

function MovieSingle({ movie }) {
  return (
    <>
      <div className={styles.movieOverlay}
        style={{ background: `linear-gradient(rgb(0 0 0 / 85%), rgb(0 7 28 / 55%)),url(https://image.tmdb.org/t/p/original/${movie.poster_path ?? ''})` }}
      ></div>
      <div className="container">
        <section className={`${styles.movieContainer} section-gap`}>
          <div className={styles.imageContainer}>
            <Image src={`https://image.tmdb.org/t/p/original${movie.poster_path ?? ''}`} unoptimized fill alt="" />
          </div>
          <div className={styles.movieContent}>
            <h1 className={styles.movieTitle}>{movie.title}</h1>

            {/* <iframe width="100%" height="400" src="https://www.youtube-nocookie.com/embed/L1GE7J-iQPA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style={{ borderRadius:"10px" }}></iframe> */}

            <Collapse />
          </div>
        </section>
      </div>
    </>
  )
}




export async function getServerSideProps(context) {
  const { action, movie } = context.params;
  const data = await findMovie(movie)



  return {
    props: {
      movie: data
    }
  }
}
export default MovieSingle