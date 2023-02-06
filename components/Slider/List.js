import React, { useState } from 'react'
import Movie from '@/components/Movie/Card'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';

export default function List(props) {
  const [slider, setSlider] = useState({
    selectedSlide: null
  })
  return (
    <section className="slider-section"
      style={slider.selectedSlide !== null ? { background: `linear-gradient(rgb(0 0 0 / 85%), rgb(0 7 28 / 55%)),url(https://image.tmdb.org/t/p/original/${props.movies[slider.selectedSlide].poster_path})` } : { position: 'relative' }}
    >
      <div className="sliders container">
        <Swiper
          modules={FreeMode}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          onSlideChange={(swiperCore) => {
            const { realIndex } = swiperCore;
            setSlider({ selectedSlide: realIndex })
          }}
          onAfterInit={(swiperCore) => {
            const { realIndex } = swiperCore;
            setSlider({ selectedSlide: realIndex })
          }}
        >
          {
            props.movies.map((movie, i) =>
              <SwiperSlide key={i}>
                <div className="slider">
                  <Movie movie={movie} />
                </div>
              </SwiperSlide>)
          }
        </Swiper>
      </div>
    </section>
  )
}

