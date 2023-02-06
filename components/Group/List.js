import Movie from '@/components/Movie/Card'
import Link from 'next/link'
import React from 'react'
import { Autoplay, FreeMode } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function List({title,movies}) {
  return (
    <section className="group section-gap">
      <div className="container">
        <div className="head">
          <h4 className='title'>{title}</h4>
          <Link href={'/actions'} legacyBehavior><a>VIEW ALL</a></Link>
        </div>
        <div className="collapse">
          <a href='#'>#POPULAR</a>
          <a href='#'>#POPULAR</a>
          <a href='#'>#POPULAR</a>
        </div>
        <div className="movies">
          <Swiper 
          modules={[Autoplay,FreeMode]}
          loop={true}
          autoplay={{
            delay: 7500,
            disableOnInteraction: false,
          }}
          spaceBetween={20} slidesPerView={5} breakpoints={{ 
            240:{
              slidesPerView:1
            },
            1200:{
              slidesPerView:4
            }
           }}>
            {
              movies.map((movie,i)=><SwiperSlide key={i}><Movie movie={movie}/></SwiperSlide>)
            } 
          </Swiper>
        </div>
      </div>
    </section>
  )
}

