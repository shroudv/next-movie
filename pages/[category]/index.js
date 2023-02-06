import React from 'react'
import { getCategoryService } from '@/services/movieService'
import styles from './styles.module.css'
import Movie from '@/components/Movie/Card'
import Head from 'next/head'

export default function Category({movies}) {

  return (
    <>
    <Head>
      <title>Kategoriya Adı</title>
    </Head>
    <div className={styles.movieOverlay} style={{ background: "linear-gradient(rgb(0 0 0 / 50%), rgb(0 0 0 / 50%)),url(http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider-bg.jpg)", position:'fixed', zIndex:'-1',top:0, width:'100%',height:'100%' }}></div>
      <div className="container">
        <section className={`${styles.listContainer} section-gap`}>
          <div className={styles.movieContent}>
            <h1 className={styles.categoryTitle}>Actions</h1>
            <div className={styles.movieList}>
                {
                  movies.map((movie, i)=><Movie key={i} movie={movie}/>)
                }
            </div>
          </div>
        </section>
      </div>
    </>
  )
}


export const getServerSideProps = async (context) =>{

  const movies = getCategoryService();
  const data = await movies;

  return{
    props:{
      movies:data.slice(0,10)
    }
  }
}